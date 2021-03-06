import React, { Component } from 'react';
import styled from 'styled-components';
import SoundBox from './components/SoundBox';
import Footer from './components/Footer';
import Header from './components/Header';

export const AppWrapper = styled.div`
  background-color: #666666;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <SoundBox />
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
