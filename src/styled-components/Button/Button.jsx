import styled, { css } from 'styled-components'
import { motion } from "framer-motion"

const MyButton = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #25282e;
    padding: 20px;
    border-radius: 16px;
    outline: solid  #111318;
    -moz-outline-radius: 16px;
    box-shadow: 5px 5px 0px 4px #111318;
    cursor: pointer;
    &:hover{
      background-color: #0000004c;
    }

`;

const Button = ({ onClick, children, className }) => {
  return (
    <MyButton
      className={className}
      whileHover={{
        scale: 1.1,
        transition: { duration: .3 },
      }}
      whileTap={{ scale: 0.9 }} onClick={onClick} >
      {children}
    </MyButton>
  )
}




export default Button;