import { FooterContainer, TextContainer  } from "./styles";
import { ImgLogo } from "../Header/styles";

export default function Footer() {
    return (
        <FooterContainer>
            <ImgLogo src="/images/marvel_m.png" alt="Marvel Logo" />
            <TextContainer>
                <p>Data provided by Marvel. © 2014 Marvel. Todos os direitos reservados.</p>
                <p>Developed by Ana Carolina</p>
            </TextContainer>
        </FooterContainer>
    );
}