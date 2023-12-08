import styled from "styled-components";

function Conteudo() {
    return (
        <StyledConteudo>
            <h2>Bla</h2>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tenetur beatae et at eos. Magni labore, quo pariatur neque facilis facere, temporibus consectetur quod exercitationem laborum, corrupti cupiditate modi ducimus.
            Ullam in iste nihil a sint incidunt! Reprehenderit nulla, eaque sunt corporis, ullam ratione modi porro velit, unde autem rerum perspiciatis quasi fuga dolores! Sed sit accusamus asperiores necessitatibus quas.
            Quisquam esse rerum incidunt consectetur saepe vitae alias nostrum reprehenderit ducimus eos, assumenda sunt nisi quod laboriosam.</p>
        </StyledConteudo>
    )
}

    const StyledConteudo = styled.section`
    padding: 2rem;
    border: 1rem solid black;
    `; 

export default Conteudo;