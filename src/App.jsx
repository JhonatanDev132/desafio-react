import Nav from "./components/Nav";

import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import Livros from "./pages/Livros";
import Container from "./components/Container";

/* Importação de recursos/componentes do React Router */
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
    return (
        <>
        <BrowserRouter>
            <Container>
                <Nav />
                <Routes>
                    <Route Component={Home} exact path="/"/>
                    <Route Component={Jogos} path="/jogos"/>
                    <Route Component={Livros} path="/livros"/>
                </Routes>
            </Container>
        </BrowserRouter>    
        </>
    );
}

export default App;