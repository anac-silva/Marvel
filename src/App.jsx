import './App.css'
import Header from './components/header'
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Banner from './components/Banner';

export default function App() {
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Banner />
      </main>
    </>
  )
}