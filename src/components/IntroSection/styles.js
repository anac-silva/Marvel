import styled from 'styled-components';

const bp = { sm: "480px", md: "768px", lg: "1024px", xl: "1280px" };
const up = k => `@media (min-width: ${bp[k]})`;

export const IntroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center`;

export const IntroTitle = styled.h1`
    font-size: 2.8rem;
    margin: 30px 0;
    color: #660c0cff;
    text-align: center;
    font-weight: 700;

    ${up("lg")}{
        font-size: 4rem;
    }
`;

export const IntroText = styled.p`
    font-size: 1rem;
    line-height: 1.2;
    max-width: 900px;
    text-align: Justify;
    margin: 0 30px;
    color: #575656ff`;

export const IntroImage = styled.img`
    width: 320px;
    margin: 20px 0 40px 0;
    border-radius: 8px;
    
    ${up("lg")}{
        width: 600px;
    }
`;

