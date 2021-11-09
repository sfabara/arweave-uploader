import styled, { css } from 'styled-components'
import { motion } from "framer-motion"

const Button = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #25282e;
    padding: 20px;
    border-radius: 16px;
    outline: solid  #111318;
    box-shadow: 5px 5px 0px 4px #111318;
    cursor: pointer;
    &:hover{
      background-color: #0000004c;
    }

`;

export default Button;