import styled from "styled-components";

const bp = { sm: "480px", md: "768px", lg: "1024px", xl: "1280px" };
const up = k => `@media (min-width: ${bp[k]})`;

export const ComicDetailsSection = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    margin: 0 auto;

    ${up("lg")}{
        width: 900px;
    }

`;

export const Separator = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 350px;
    margin: 0 auto;

    ${up("lg")}{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

export const DetailsTitle = styled.h2`
    font-size: 2rem;
    color: #660c0cff;
    padding: 20px;
    text-align: justify;
`;

export const DetailsImage = styled.img`
    width: 230px;
    margin: auto;
    padding-bottom: 20px;

    ${up("lg")}{
        margin: 20px;
    }
`;

export const DetailsDescription = styled.p`
    font-size: 1rem;
    color: #333;
    text-align: justify;
    padding: 0 20px;
`;

export const DetailsButton = styled.button`
    background-image: linear-gradient(to right, #2d53b9ff, #c22041ff);
    color: white;
    padding: 10px 25px;
    width: 250px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    align-self: center;
    margin: 30px;
`;