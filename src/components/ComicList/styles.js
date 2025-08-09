import styled from "styled-components";

export const ComicListContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    gap: 20px;
    padding: 20px;
`;

export const CardComicList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e0e0e0ff;
    width: 310px;
    border-radius: 10px;
    margin: 20px 0;
`;

export const CardComicListImage = styled.img`
    width: 280px;
    border-radius: 10px;
    margin: 15px;
`;

export const CardComicListTextos = styled.div`
    text-align: left;
    width: 270px;
`;

export const CardComicListTitle = styled.h3`
    font-size: 1rem;
`;

export const CardComicListValor = styled.p`
    font-size: 0.8rem;
    margin: 10px 0;
    color: #575656ff;
`;

export const CardComicListButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 20px;
    width: 280px;
`;

export const ButtonComicListAdicionar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right, #2d53b9ff, #c22041ff);
    color: white;
    padding: 10px 25px;
    width: 130px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`;

export const ButtonComicListDetalhes = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b9b9b9ff;
    color: white;
    width: 130px;
    padding: 10px 25px;
    border: 1px solid #575656ff;
    border-radius: 10px;
    cursor: pointer;
`;

