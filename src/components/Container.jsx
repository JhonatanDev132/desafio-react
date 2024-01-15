import styled from "styled-components";

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.main`
    position: relative;
    top: 18rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 1rem;
    width: 70dvw;
    width: 70vw;

    

    display: flex;
`;

export default Container;