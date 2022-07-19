import styled from "styled-components";

export const ContentLeft = styled.div`
    max-width: 180px;
    width: 100%;
    margin-top: 7px;
`;

export const LinkLogo = styled.a`
    max-width: 180px;
    display: block;
    overflow: hidden;
`;
export const ImgLogo = styled.img`
    width: 100%;
    display: block;
    @media (max-width: 615px){
        display:none;
    }
`;
export const ImgLogo2 = styled.img`
    width: 100%;
    display: none;
    @media (max-width: 615px){
        display: block;
        object-fit: cover;
       width: 46px;
    }
`;