import {
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'
import styles from '../styles/Home.module.css'
import { AnchorProvider, BN, Program, utils, web3 } from '@project-serum/anchor'
import { Connection, PublicKey } from '@solana/web3.js'
import { useAnchorWallet } from '@solana/wallet-adapter-react'

const idl = require('../public/blockchain/idl.json')
const utf8 = utils.bytes.utf8

function Testing1() {
  const anchorWallet = useAnchorWallet()

  async function sendTransaction() {
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

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.walletButtons}>
          <WalletMultiButton />
          <WalletDisconnectButton />
        </div>

        <p className={styles.description}>
          <button onClick={sendTransaction}>Create Transaction</button>
        </p>
      </main>
    </div>
  )
}

export default Testing1
