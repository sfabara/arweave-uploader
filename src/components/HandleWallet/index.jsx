import { useState, useRef, useEffect } from 'react'
import { BiUpload } from 'react-icons/bi'
import { GrConnect } from 'react-icons/gr'
import { BsWallet2 } from 'react-icons/bs'
import styled, { css } from 'styled-components'
import { motion } from "framer-motion"
import Arweave from 'arweave';
import DotLoader from "react-spinners/DotLoader";
import "./index.css"

//components
import OpenedWallet from '../OpenedWallet/index'
import InputWallet from '../InputWallet/index'


const HandleWallet = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
  width: 100%;
`

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

const ConnectWalletBtn = styled(Button)`
flex-direction: row;
justify-content: space-around;
    color: black ;
    width: 50%;
    background-color: #ffffff;
    box-shadow: 5px 5px 0px 7px #000000;
    font-weight: 700;
    outline: solid #000000;
    &:hover{
      background-color: #000000;
      color: white !important;
      box-shadow: 5px 5px 0px 7px #ffffff ;
      stroke: white;
      fill: white;
      outline: solid #ffffff;

    }
`


const NewWalletBtn = styled(Button)`
    flex-direction: row;
    justify-content: space-around;
    color: #ffffff ;
    width: 50%;
    background-color: #000000;
    box-shadow: 5px 5px 0px 7px #ffffff;
    font-weight: 700;
    outline: solid #fff;
    &:hover{
        background-color: #f0f0f0;
        color: #000000 !important;
        outline: solid #000000;
        box-shadow: 5px 5px 0px 7px #000000 ;
    }
`



const Component = ({ arKey, setArKey, arweave, setWalletRendered, setWinston, winston, setAr, ar, setConnectWallet, comp, walletRendered, connectWallet, setComp }) => {
    const [loading, setLoading] = useState(false)


    const handleOpenWallet = () => {

        setLoading(true)


        arweave.wallets.generate()
            .then((gen_key) => {

                console.log(gen_key)


                arweave.wallets.jwkToAddress(gen_key)
                    .then((address) => {
                        setLoading(false)
                        setWalletRendered(true)
                        console.log(address);
                        setArKey(address)

                        arweave.wallets.getBalance(address)
                            .then((balance) => {
                                //let winston = balance;
                                //let ar = arweave.ar.winstonToAr(balance);
                                setWinston(balance)
                                setAr(arweave.ar.winstonToAr(balance))


                            });





                    })
                    .catch(err => console.error(err));





            })
            .catch(err => console.error(err));

        return


    }

    const handleConnectWallet = () => {
        setLoading(true)
        setTimeout(()=>
        {
            setLoading(false)
        }, [1000])
        setConnectWallet(true)
    }




    // if (walletRendered) {
    //     setComp(<OpenedWallet ar={ar} winston={winston} arKey={arKey} setWalletRendered={setWalletRendered} />)
    // }

    // if (connectWallet) {
    //     setComp(wallet = <InputWallet />)
    // }
    if (!walletRendered && !connectWallet) {
        return (
            <>
                {loading ? <DotLoader color={"white"} /> : <HandleWallet>


                    <NewWalletBtn

                        onClick={handleOpenWallet}
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                duration: .3
                            },

                        }}
                        whileTap={{

                            scale: 0.9
                        }}

                    >
                        <BsWallet2 size={60} />
                        Open Wallet

                    </NewWalletBtn>

                    <h2 style={{ color: "white" }}> OR </h2>


                    <ConnectWalletBtn
                        onClick={handleConnectWallet}
                        className="connect"
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: .3 },
                        }}
                        whileTap={{ scale: 0.9 }}>
                        <GrConnect className="connect" size={60} />
                        Connect Wallet
                    </ConnectWalletBtn>


                </HandleWallet>}
            </>
        )
    }
    else if (walletRendered && !connectWallet) {
        return <>

            {loading ? <DotLoader color={"white"} /> : <OpenedWallet ar={ar} winston={winston} arKey={arKey} setWalletRendered={setWalletRendered} />}

        </>
    }
    else if (connectWallet && !walletRendered) {
        return (
            <>
                {loading ? <DotLoader color={"white"} /> :
                    <InputWallet setConnectWallet={setConnectWallet}/>
                }

            </>)
    }



}

export default Component