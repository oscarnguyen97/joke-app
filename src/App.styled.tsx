import styled from "styled-components";

export const StyleScreen = styled.div`
    position: relative;
    overflow: hidden;
`

export const WrapperHeader = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  z-index: 4;
`

export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 16px 0px;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  z-index: 4;
  min-height: calc(100vh - 120px);
  @media (max-width: 1280px) {
    padding: 85px 16px 0px;
  }
  @media (max-width: 800px) {
    padding: 50px 16px 0;
    min-height: calc(100vh - 200px);
  }
`