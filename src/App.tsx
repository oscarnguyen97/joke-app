import React from "react"
import Header from "Components/Header";
import {
  StyleScreen, 
  WrapperHeader
} from './App.styled'

const App = () => {
  return (
    <StyleScreen>
      <WrapperHeader>
        <Header />
      </WrapperHeader>
    </StyleScreen>
  );
}

export default App;
