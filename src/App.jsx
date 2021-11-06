import { useState, useRef, useEffect} from 'react'
import './App.css'
import { BiUpload } from 'react-icons/bi'
import { GrConnect } from 'react-icons/gr'
import { BsWallet2 } from 'react-icons/bs'
import styled, { css } from 'styled-components'
import { motion } from "framer-motion"
import Arweave from 'arweave';
import { default as logo } from './arweave.svg';


// Components
import HandleWallet from './components/HandleWallet/index'
import OpenedWallet from './components/OpenedWallet/index'

const Button = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #25282e;
    padding: 20px;
    border-radius: 16px;
    box-shadow: 5px 5px 0px 4px #111318;
    cursor: pointer;
    &:hover{
      background-color: #0000004c;
    }

`;







const Panel = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #25282e;
  height: 600px;
  width: 40%;
  border-radius: 16px;
  box-shadow: 7px 7px 0px 7px #00000080;
  color: black;
  
`





function App() {
  const inputFileRef = useRef();
  const handleUploadClick = () => {
    inputFileRef.current.click();
  }
  // =========================================================
  // =========================================================
  // Arweave stuff here!!!!
  const [arKey, setArKey] = useState(false)
  const [walletRendered, setWalletRendered] = useState(false)
  const [winston, setWinston] = useState(null)
  const [ar, setAr] = useState(null)


  const arweave = Arweave.init({});


  // =========================================================
  // =========================================================
  useEffect(() => {
    arweave.wallets.getBalance(arKey)
      .then((balance) => {
        //let winston = balance;
        //let ar = arweave.ar.winstonToAr(balance);
        setWinston(balance)
        setAr(arweave.ar.winstonToAr(balance))


      });


  }, [arKey])



  return (
    <div className="App">
      <div style={{ display: "flex", boxShadow: "10px 10px" }}>
        <img src={logo} style={{ width: "100px" }} />
        <h1>Arweave Uploader </h1>

      </div>

      <header className="App-header">



        <Panel>

          {










            walletRendered ? <OpenedWallet ar={ar} winston={winston} arKey={arKey}/> : <HandleWallet
              setAr={setAr}
              setWinston={setWinston}
              setWalletRendered={setWalletRendered} arKey={arKey} setArKey={setArKey} arweave={arweave} />}





        </Panel>

        <form>
          <Button
            onClick={handleUploadClick}
            whileHover={{
              scale: 1.1,
              transition: { duration: .3 },
            }}
            whileTap={{ scale: 0.9 }}
          >


            Upload File <BiUpload size={60} />


          </Button>
          <input type="file" ref={inputFileRef} style={{ display: "none" }} />
        </form>




      </header>
    </div>
  )
}

export default App
