import React from "react";
import styled from "styled-components";
import marvelBanner from '../assets/images/carrossel/marvel_comic.jpg';

const ImgBanner = styled.img`
    max-width: 100%;
    max-height: 800px`;

export default function Banner() {
    
    return (
        <section>
            <ImgBanner src={marvelBanner} alt="Banner Marvel" />
        </section>
    )
}
