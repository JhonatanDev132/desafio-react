import styled from "styled-components";
import harrypotter from "../assets/imagens/HarryPotter.png";

function ConteudoLivro() {
    return (
        <StyledLivro>
            <h2>Harry Potter</h2>
            <p>Incrível como eu gosto de tudo dessa série: Livros, Jogos, Séries e tals. <br />
            Tudo mt pika
            </p>
        </StyledLivro>
    );
}

const StyledLivro = styled.section`
    padding: 2rem;
    border: 1rem solid black;
    width: 100%;
    color: white;
    background: url(${harrypotter});
    background-size: cover; /* ou ajuste conforme necessário */

`;

export default ConteudoLivro;
