import styled, { css } from 'styled-components'
import { motion } from "framer-motion"
import Button from '../Button/Button.jsx'
import { IoIosArrowBack } from 'react-icons/io';


const BackButton = styled(Button)`
    align-self: flex-start;
    background-color: white;
    width: 5%;
    height: 6%;
    padding: 5px;
    outline: none;
    &:hover{
        background-color: #c84a4a;
    }
`





const Component = ({onClick, children}) => {

    return (
        <>
            <BackButton
                onClick={onClick}
>
                <IoIosArrowBack size={60} color={"black"} />
            </BackButton>
        </>


    )
}


export default Component;