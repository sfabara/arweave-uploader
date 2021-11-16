import { useEffect, useState } from "react";
import styled, { css } from 'styled-components'
import { motion } from "framer-motion"
import BackButton from '../../styled-components/BackButton/BackButton'
import InputForm from "../../styled-components/InputForm/InputForm"
import Button from '../../styled-components/Button/Button'
import { default as logo } from '../../arweave.svg';
import { ImUpload } from "react-icons/im"
import { HiPuzzle } from "react-icons/hi"

const Content = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    width: 90%;
    justify-content: space-between;
`

const ChoicesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    height: 90%;



`

const ChoiceButton = styled(Button)`
    background-color: #cecece;
    width: 60%;
    height: 18%;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    &:hover{
        background-color: #fcfcfc;
    }
`






const Component = ({ setConnectWallet }) => {

    const [seed, setSeed] = useState(false)
    const [extension, setExtension] = useState(false)
    const [upload, setUpload] = useState(false)

    const handleBack = () => {
        setSeed(false)
        setExtension(false)
        setUpload(false)
    }

    const MainContainer = ({ children }) => {
        return (

            <>
                <Content>
                    <BackButton onClick={handleBack} />
                    {children}

                </Content>

            </>)


    }


    if (!extension && !upload && !seed) {

        return (


            <MainContainer >


                <ChoicesContainer>
                    <ChoiceButton onClick={() => { setExtension(true) }}>

                        Arweave Extension       <img src={logo} style={{ width: "100px" }} />
                    </ChoiceButton>
                    <ChoiceButton onClick={() => { setUpload(true) }}>
                        Upload JSON
                        <ImUpload size={60} color={"#0f0f0f"} />

                    </ChoiceButton>
                    <ChoiceButton onClick={() => { setSeed(true) }}>
                        Seed Phrase
                        <HiPuzzle size={65} color={"#0f0f0f"} />

                    </ChoiceButton>

                </ChoicesContainer>

            </MainContainer>




        )



    }
    else if (seed) {
        return (
            <MainContainer >


                seeed

            </MainContainer>)
    }
    else if (extension) {
        return (
        
        <MainContainer >


            extened

        </MainContainer>)
    }
    else if (upload) {
        return (
        
        <MainContainer >


            upload

        </MainContainer>)
    }

}

export default Component