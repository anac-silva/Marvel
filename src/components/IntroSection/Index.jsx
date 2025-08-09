import React from 'react';
import { 
    IntroSection, 
    IntroTitle, 
    IntroText, 
    IntroImage } from './styles';
import styled from 'styled-components';


export default function Introducao() {

    return (
        <IntroSection>
            <IntroTitle>Marvel Comics</IntroTitle>
            <IntroText>Descubra as melhores histórias em quadrinhos do universo Marvel. Heróis épicos, vilões inesquecíveis e aventuras que mudarão sua vida.</IntroText>
            <IntroImage src="/images/ImagemSection.jpg" alt="Marvel Comics" />
        </IntroSection>
    )
}
