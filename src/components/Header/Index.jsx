import React from 'react';
import styled from 'styled-components';
import { HeaderContainer, ImgLogo, ImgCarrinho, LinkStyled } from './styles';

export default function Header() {
    return (
        <HeaderContainer>
            <ImgLogo src="/images/marvel_m.png" alt="Marvel Logo" />
            <nav>
                <LinkStyled to="/cart" style={{ textDecoration: "none" }}>
                    <ImgCarrinho src="/images/carrinho_logo.png" alt="Carrinho" />
                    <p>Carrinho</p>
                </LinkStyled>
            </nav>
        </HeaderContainer>
    )
}

