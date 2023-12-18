import styled from "styled-components";

function ConteudoLivro() {
    return (
        <StyledLivro>
            <h2>Harry Potter</h2>

            <p>Gosto muitooo</p>
        </StyledLivro>
    )
}

    const StyledLivro = styled.section`
    padding: 2rem;
    border: 1rem solid black;
    width: 100%;
    `;

    export default ConteudoLivro;