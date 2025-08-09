import styled from "styled-components";

const bp = { sm: "480px", md: "768px", lg: "1024px", xl: "1280px" };
const up = k => `@media (min-width: ${bp[k]})`;

export const CartSection= styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const CartTitle = styled.h2`
    font-size: 2.5rem;
    color: #660c0cff;
    padding: 20px 0 30px 0;
`;

export const CartList = styled.div`
    display: flex;
    align-items: stretch;
    border-bottom: 1px solid #ccc;
    padding: 15px 0;
    max-width: 800px;
    margin: 0 20px;

    ${up("lg")}{
        width: 1200px;
    }

`;

export const CartDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5px;
    flex: 1;
`;

export const CartItemTitle = styled.h3`
    font-size: 1rem;
`;

export const CartButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    align-items: flex-end;
`;

export const CartRemoveButton = styled.button`
    background-color: #ad3838ff;
    color: white;
    padding: 5px 5px;
    border: none;
    border-radius: 6px;
`;

export const CartSummary = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

export const CartSummaryTitle = styled.h3`
    font-size: 1.5rem;
    padding: 10px 0;
`;

export const CartSummaryButton = styled.button`
    background-color: #041368ff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
`;