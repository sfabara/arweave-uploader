import { useEffect, useState } from "react";
import styled, { css } from 'styled-components'

//Styled Components
import Button from '../../styled-components/Button/Button'
import BackButton from '../../styled-components/BackButton/BackButton'

import { FaClipboard, FaClipboardCheck } from 'react-icons/fa'
import "./index.css"
import { motion } from "framer-motion"


// const BackButton = styled(Button)`
//     align-self: flex-start;
//     background-color: white;
//     width: 5%;
//     height: 6%;
//     padding: 5px;
//     outline: none;
//     &:hover{
//         background-color: #c84a4a;
//     }
// `

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
    font-weight: 500;

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
                />
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
                        {copy ? <FaClipboardCheck size={28} className="clipboard" /> : <FaClipboard size={28} className="clipboard" onClick={handleCopy} />}
                    </Copy>

                </Address>
                {/* <h5>{winston} Winston</h5> */}
                <h1 className="balance">{Math.round(ar * 100) / 100} AR</h1>


            </Content>

        </>

    )
}

export default Component