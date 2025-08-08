import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px`;
    
const ImgLogo = styled.img`
    width: 170px`;

const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center`;

const Img = styled.img`
    width: 30px;
    padding: 0 20px`;

const ListaItem = styled.li`
    list-style: none`;

const Links = styled.a`
    text-decoration: none;
    color: #fff`;

export default function Header() {

    

    return (
        <HeaderContainer>
            
            <ImgLogo src="/images/marvel_logo.png" alt="Marvel Logo" />
            <nav>
                <Ul>
                    <ListaItem>
                        <Links href="/">Home</Links>
                    </ListaItem> 
                
                    <ListaItem>
                        <Links href="/characters"> 
                            <Img src="/images/carrinho_logo.png" alt="Carrinho" />
                        </Links>
                    </ListaItem>
                </Ul>
            </nav>
        </HeaderContainer>
    )
}

