import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ImgLogo = styled.img`
    width: 80px;
    margin: 20px;
`;

export const ImgCarrinho = styled.img`
    width: 30px;
    padding-right: 10px;
`;

export const LinkStyled = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000000;
    margin-right: 20px;
    background-color: #cfccccff;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #686868ff;
`;
