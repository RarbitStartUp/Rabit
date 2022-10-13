import { useState } from 'react'
import {
  useWalletModal,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Transaction,
} from '@solana/web3.js'
import styles from '../styles/Home.module.css'
import { AnchorProvider, BN, Program, utils, web3 } from '@project-serum/anchor'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import nacl from 'tweetnacl'
import bs58 from 'bs58'
import * as Linking from 'expo-linking'

import BottomTabsReward from '../components/BottomTabs/BottomTabsReward'
import PopUpMenu from '../components/PopUpMenu'
import CoinGecko from './CoinGecko'
// import DropDownMenu from '../components/DropDownMenu'
import TailwindRewardTable3 from '../components/TailwindRewardTable3'
import { FiPlusCircle } from 'react-icons/fi'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { MdHistory } from 'react-icons/md'
import { useRouter } from 'next/router'
import RewardHeader from '../components/RewardHeader'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { decryptPayload } from '../components/utils/decryptPayload'
import { encryptPayload } from '../components/utils/encryptPayload'
import { buildUrl } from '../components/utils/ buildUrl'

const idl = require('../public/idl.json')
const utf8 = utils.bytes.utf8

// const Home: NextPage = () => {
export default function Reward() {
  async function sendTransaction() {
    const anchorWallet = useAnchorWallet()
    if (!anchorWallet) {
      return
    }
    const network = 'http://127.0.0.1:8899'
    const connection = new Connection(network, 'processed')
    const provider = new AnchorProvider(connection, anchorWallet, {
      preflightCommitment: 'processed',
    })
    const program = new Program(idl, idl.metadata.address, provider)

    try {
      const toKey = new PublicKey(
        '7k4uCFsyTDpSmBpBfminAMFzrfsrap7TX2QGBwwbi1Qm'
      )
      const [escrowPDA] = await web3.PublicKey.findProgramAddress(
        [
          utf8.encode('escrow'),
          anchorWallet.publicKey.toBuffer(),
          toKey.toBuffer(),
        ],
        program.programId
      )

      console.log('escrowPDA', escrowPDA)

      const trans = await program.methods
        .createEscrow(new BN(30))
        .accounts({
          escrow: escrowPDA,
          from: anchorWallet.publicKey,
          to: toKey,
          systemProgram: web3.SystemProgram.programId,
        })
        .rpc()

      console.log('trans', trans)

      const escrowAccount = await program.account.escrowAccount.fetch(escrowPDA)
      console.log('escrowAccount', escrowAccount)
    } catch (err) {
      console.log(err)
    }
  }

  const [phantomWalletPublicKey, setPhantomWalletPublicKey] =
    useState<PublicKey | null>(null)
  // export default function Reward() {
  const router = useRouter()
  // const { setVisible } = useWalletModal()

  const [dappKeyPair] = useState(nacl.box.keyPair())
  const [sharedSecret, setSharedSecret] = useState<Uint8Array>()
  const onConnectRedirectLink = Linking.createURL('onConnect')

  const [deepLink, setDeepLink] = useState<string>('')
  const [session, setSession] = useState<string>()

  // On app start up, check if we were opened by an inbound deeplink. If so, track the intial URL
  // Then, listen for a "url" event
  useEffect(() => {
    const initializeDeeplinks = async () => {
      const initialUrl = await Linking.getInitialURL()
      if (initialUrl) {
        setDeepLink(initialUrl)
      }
    }
    initializeDeeplinks()
    const listener = Linking.addEventListener('url', handleDeepLink)
    return () => {
      listener.remove()
    }
  }, [])

  // When a "url" event occurs, track the url
  const handleDeepLink = ({ url }: Linking.EventType) => {
    setDeepLink(url)
  }
  const url = new URL(deepLink)
  const params = url.searchParams

  // Handle in-bound links
  useEffect(() => {
    if (!deepLink) return

    // Handle an error response from Phantom
    if (params.get('errorCode')) {
      const error = Object.fromEntries([...params])
      const message =
        error?.errorMessage ??
        JSON.stringify(Object.fromEntries([...params]), null, 2)
      console.log('error: ', message)
      return
    }

    // Handle a `connect` response from Phantom
    if (/onConnect/.test(url.pathname)) {
      const sharedSecretDapp = nacl.box.before(
        bs58.decode(params.get('phantom_encryption_public_key')!),
        dappKeyPair.secretKey
      )
      const connectData = decryptPayload(
        params.get('data')!,
        params.get('nonce')!,
        sharedSecretDapp
      )
      setSharedSecret(sharedSecretDapp)
      setSession(connectData.session)
      setPhantomWalletPublicKey(new PublicKey(connectData.public_key))
      console.log(`connected to ${connectData.public_key.toString()}`)
    }
  }, [deepLink])

  // Initiate a new connection to Phantom
  const connect = async () => {
    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      cluster: 'devnet',
      app_url: 'https://rarbit.com',
      redirect_link: onConnectRedirectLink,
    })

    const url = `https://phantom.app/ul/v1/connect?${params.toString()}`
    Linking.openURL(url)
    // NextJS way of doing (openURL) :
    // document.location.href = 'https://phantom.app/ul/v1/connect'
  }

  const onDisconnectRedirectLink = Linking.createURL('onDisconnect')

  // Handle a `disconnect` response from Phantom
  if (/onDisconnect/.test(url.pathname)) {
    setPhantomWalletPublicKey(null)
    console.log('disconnected')
  }

  // Initiate a disconnect from Phantom
  const disconnect = async () => {
    const payload = {
      session,
    }
    const [nonce, encryptedPayload] = encryptPayload(payload, sharedSecret)
    const params = new URLSearchParams({
      dapp_encryption_public_key: bs58.encode(dappKeyPair.publicKey),
      nonce: bs58.encode(nonce),
      redirect_link: onDisconnectRedirectLink,
      payload: bs58.encode(encryptedPayload),
    })
    const url = buildUrl('disconnect', params)
    Linking.openURL(url)
  }

  const signAndSendTransaction = async (transaction: Transaction) => {
    console.log('signAndSendTransaction')
  }

  return (
    <div>
      <div className="fixed z-30 bg-white">
        <RewardHeader />
      </div>
      <div className="static h-screen bg-white">
        <div className="mx-auto flex h-screen flex-col px-9">
          <div className="py-10" />
          <div className="flex-grow flex-col gap-y-10">
            <div className="box sm:flex">
              <div className="flex flex-1 flex-col justify-center rounded-2xl bg-white p-8 shadow">
                {/* <DropDownMenu /> */}

                <div className="mt-2 leading-relaxed text-slate-500 dark:text-slate-500">
                  {' '}
                  You've Earned
                </div>

                <CoinGecko />

                {phantomWalletPublicKey ? (
                  <>
                    <div className="z-40 text-black">
                      {`Connected to: ${phantomWalletPublicKey.toString()}`}
                    </div>
                    {/* <button>Withdraw</button> */}

                    <button onClick={disconnect}>Disconnect</button>
                  </>
                ) : (
                  <div className="z-30 flex w-screen flex-row justify-between">
                    <button
                      onClick={connect}
                      className="fixed bottom-36 rounded-xl bg-gradient-to-tr from-[#5b056a] via-[#79168a] to-[#00ffa2a8]   py-3 px-5 font-semibold text-white shadow-lg shadow-slate-400 hover:bg-purple-900 lg:hidden"
                    >
                      <div className="flex">
                        <div className="mr-3">Connect</div>
                        <Image
                          src={'/img/PhantomWalletLogo/phantom-icon-purple.png'}
                          alt="thumbnail"
                          width={25}
                          height={25}
                          // layout="fill"
                          objectFit="cover"
                        />
                        <div className="ml-3">Phantom Wallet</div>
                      </div>
                    </button>
                    <button className="fixed bottom-20 rounded-xl bg-gradient-to-tr from-[#000000cd] via-[#5b056a] to-[#79168a] px-20 py-3 font-semibold text-white shadow-lg shadow-slate-400 hover:bg-purple-900 lg:hidden">
                      Withdraw SOL
                    </button>
                  </div>
                )}
                <div className="invisible fixed right-52 top-0 z-30 lg:visible">
                  <div className={styles.walletButtons}>
                    <WalletMultiButton />
                  </div>
                </div>
                {/* <div class="mt-[25px] flex items-center">
                  <div class="relative text-2xl font-medium">$400.00</div>
                  <div class="flex cursor-pointer px-2 text-green-500">
                    {' '}
                    +4.1%
                    <AiOutlineArrowUp />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="box sm:flex">
              <div className="mt-4 flex flex-1 flex-col justify-center rounded-2xl bg-white p-8 shadow">
                <div className="flex items-center">
                  <div className="text-1xl truncate font-medium text-slate-500 ">
                    Top 5 allocations
                  </div>
                  <div className="ml-auto flex items-center justify-center ">
                    <div className="mr-5 flex flex-col items-center">
                      <MdHistory
                        className="h-7 w-7 text-primary"
                        onClick={() => router.push('../Records')}
                      />
                      <div className="text-[10px] text-primary">Records</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <FiPlusCircle
                        className="mr-2 h-6 w-6 text-primary"
                        onClick={() => router.push('../Tabs')}
                      />
                      <div className="mt-1 text-[10px] text-primary">
                        Add Shops
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-100 mt-7 overflow-x-auto overflow-y-hidden">
                  <TailwindRewardTable3 />
                  <div
                    onClick={() => router.push('../Records')}
                    className="cursor-pointer truncate pl-2 text-sm font-medium text-primary underline"
                  >
                    See More
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="py-5 text-center">Tab bar goes here</div> */}
          <div className="py-24 lg:hidden" />
          <div className="sm:py-24 md:py-14 lg:py-14 " />
        </div>
      </div>
      <BottomTabsReward />
    </div>
  )
}
