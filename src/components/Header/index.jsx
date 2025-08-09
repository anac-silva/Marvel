import React from "react";
import { useLocation } from "react-router-dom";
import { 
    HeaderContainer, 
    ImgLogo, 
    ImgCart, 
    LinkStyled } from "./styles";

export default function Header() {
    const location = useLocation();
    const isHome = location.pathname === "/"; 
    const nextHref = isHome ? "/cart" : "/";
    const nextLabel = isHome ? "Carrinho" : "Home";

    return (
        <HeaderContainer>
            <ImgLogo src="/images/marvel_m.png" alt="Marvel Logo" />
            <nav>
                <LinkStyled to={nextHref} style={{ textDecoration: "none" }}>
                    <ImgCart
                        src={isHome ? "/images/carrinho_icon.png" : "/images/home_icon.png"}
                        alt={nextLabel}
                    />
                    <p>{nextLabel}</p>
                </LinkStyled>
            </nav>
        </HeaderContainer>
    )
}

