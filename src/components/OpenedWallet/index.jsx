import {useEffect} from "react";
import styled, { css } from 'styled-components'

const Address = styled.p`
    text-decoration: underline;
    color: white;
    font-size: smaller;



`;

const Component = ({arKey, winston, ar}) =>
{
    return(
        <>
           <Address>{arKey}</Address>
            <h5>{winston} Winston</h5>
            <h5>{ar} AR</h5>
        </>

    )
}

export default Component