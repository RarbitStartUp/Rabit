import {
  useWalletModal,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'
// import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { AnchorProvider, BN, Program, utils, web3 } from '@project-serum/anchor'
import { Connection, PublicKey } from '@solana/web3.js'
import { useAnchorWallet } from '@solana/wallet-adapter-react'

import BottomTabsReward from '../components/BottomTabs/BottomTabsReward'
import PopUpMenu from '../components/PopUpMenu'
import CoinGecko from './CoinGecko'
// import DropDownMenu from '../components/DropDownMenu'
import TailwindRewardTable3 from '../components/TailwindRewardTable3'
import { FiPlusCircle } from 'react-icons/fi'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { MdHistory, MdLanguage, MdLogout } from 'react-icons/md'
import { useRouter } from 'next/router'

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

  // export default function Reward() {
  const router = useRouter()
  // const { setVisible } = useWalletModal()
  return (
    <div>
      <div className="h-screen bg-white">
        <div class="mx-auto flex h-screen max-w-7xl flex-col px-9 sm:px-9 md:px-4">
          <div class="flex items-center justify-between pt-10 pb-7">
            <div class="flex flex-auto justify-start lg:w-0 lg:flex-1">
              <span class="text-2xl font-bold text-gray-600">Rarbit</span>
            </div>

            {/* <div class="-my-2 -mr-2"> */}
            {/* <PopUpMenu /> */}

            <MdLanguage
              className="mr-5 h-6 w-6 text-secondary"
              aria-hidden="true"
            />

            <MdLogout
              onClick={() => router.push('../Login')}
              className="mr-5 h-6 w-6 text-secondary"
              aria-hidden="true"
            />
          </div>

          <div class="flex-grow flex-col gap-y-10">
            <div class="box sm:flex">
              <div class="flex flex-1 flex-col justify-center rounded-2xl bg-white p-8 shadow">
                {/* <DropDownMenu /> */}

                <div class="mt-2 leading-relaxed text-slate-500 dark:text-slate-500">
                  {' '}
                  You've Earned
                </div>

                <CoinGecko />
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
            <div class="box sm:flex">
              <div class="mt-4 flex flex-1 flex-col justify-center rounded-2xl bg-white p-8 shadow">
                <div class="flex items-center">
                  <div class="text-1xl truncate font-medium text-slate-500 ">
                    Top 5 allocations
                  </div>
                  <div class="ml-auto flex items-center justify-center ">
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

                <div class="w-100 mt-7 overflow-x-auto overflow-y-hidden">
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
          <div className="fixed bottom-20 z-10">
            <div className="mt-5 flex flex-row justify-center space-x-10">
              <div className="shadow-xl shadow-slate-300">
                {/* <button
                  // onClick={setVisible(true)}
                  // onClick={() => router.back()}
                  className="h-100 w-100 bg-white text-primary shadow-xl shadow-slate-300"
                >
                  hi
                </button> */}
                <WalletMultiButton />
              </div>
              <div className="shadow-xl shadow-slate-300">
                <WalletDisconnectButton />
              </div>
            </div>
          </div>
          <div className="py-10" />
        </div>
      </div>
      <BottomTabsReward />
    </div>
  )
}
