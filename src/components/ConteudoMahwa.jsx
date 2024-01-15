import styled from "styled-components";
import jin_woo from "../assets/imagens/solo-leveling.jpg"

function ConteudoMahwa() {
    
    return (
        <StyledAnimes>
            <h2>Solo leveling</h2>

            <p>isso é bizarro de bom</p>
        </StyledAnimes>
    )
}

    const StyledAnimes = styled.section`
    padding: 2rem;
    border: 1rem solid black;
    width: 100%;
    color: white;
    background: url(${jin_woo});
    background-size: cover;
    `;

    export default ConteudoMahwa;