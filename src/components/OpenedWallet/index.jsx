import { useEffect, useState } from "react";
import styled, { css } from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io';
import Button from '../../styled-components/Button'
import { FaClipboard, FaClipboardCheck } from 'react-icons/fa'
import "./index.css"
import { motion } from "framer-motion"

const BackButton = styled(Button)`
    align-self: flex-start;
    background-color: white;
    width: 5%;
    height: 6%;
    padding: 5px;
    &:hover{
        background-color: #c84a4a;
    }
`

const Address = styled.div`
    color: white;
    font-size: 24px;
    background-color: #111318;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px;

`;

const Content = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    width: 90%;
`

const Copy = styled(motion.div)`


`


const Component = ({ arKey, winston, ar, setWalletRendered }) => {
    const handleBack = () => {
        setWalletRendered(false)

    }

    const handleCopy = () => {
        setCopy(!copy)
        navigator.clipboard.writeText(arKey)

    }

    const [copy, setCopy] = useState(false)


    return (
        <>
            <Content>
                <BackButton
                    onClick={handleBack}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: .3 },
                    }}
                    whileTap={{ scale: 0.9 }}>
                    <IoIosArrowBack size={60} color={"black"} />
                </BackButton>
                <Address>
                    {arKey}
                    <Copy whileHover={{
                        scale: 1.1,
                        transition: {
                            duration: .3
                        },

                    }}
                        whileTap={{

                            scale: 0.9
                        }}>
                        {copy ? <FaClipboardCheck size={28}  className="clipboard" /> : <FaClipboard size={28} className="clipboard" onClick={handleCopy} />}
                    </Copy>

                </Address>
                {/* <h5>{winston} Winston</h5> */}
                <h3>{Math.round(ar * 100) / 100} AR</h3>


            </Content>

        </>

    )
}

export default Component