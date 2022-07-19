import styled from "styled-components";

export const HeaderScroll = styled.div``

export const Container = styled.div`
    padding: 0 1.5rem;
    @media (max-width: 480px) {
        padding: 0 0 0 1rem;
    }
    z-index: 1;
`

export const HeaderTop = styled.header`
    position: absolute;
    padding: 9px 0px;
    width: 100%;
    z-index: 1 !important;
    transition: ease all 0.5s;
    @media screen and (max-width: 769px) {
        padding: 0px;
    }
    :before {
        content: "";
        z-index: -1;
        position: absolute;
        inset: 0px;
        backdrop-filter: blur(1px);
    }
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
     padding-top:10px;
    @media screen and (max-width: 833px) {
        margin: 0px;
    }
    @media screen and (max-width: 476px) {
        margin: 0px;
    }
`;