import styled from "styled-components";

function ConteudoJogos() {
    return (
        <StyledJogos>
            <h2>Pokemon</h2>

            <p>Jogo mó das hora</p>
        </StyledJogos>
    )
}

    const StyledJogos = styled.section`
    padding: 2rem;
    border: 1rem solid black;
    width: 100%;
    `;

    export default ConteudoJogos;