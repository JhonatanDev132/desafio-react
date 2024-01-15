import Nav from "./components/Nav";

import Home from "./pages/Home";
import Animes from "./pages/Animes";
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
                    <Route Component={Animes} path="/animes"/>
                    <Route Component={Livros} path="/livros"/>
                </Routes>
            </Container>
        </BrowserRouter>
        <script src="js/mudarCorFundo"></script>    
        </>
    );
}

export default App;