import React from 'react';
import { IntroSectionContainer, TituloContainer, TextoContainer, ImagemContainer } from './styles';
import styled from 'styled-components';


export default function Introducao() {

    return (
        <IntroSectionContainer>
            <TituloContainer>Marvel Comics</TituloContainer>
            <TextoContainer>Descubra as melhores histórias em quadrinhos do universo Marvel. Heróis épicos, vilões inesquecíveis e aventuras que mudarão sua vida.</TextoContainer>
            <ImagemContainer src="/images/ImagemSection.jpg" alt="Marvel Comics" />
        </IntroSectionContainer>
    )
}
