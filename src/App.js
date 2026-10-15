import './App.css';
import {Pessoa} from "./components/Pessoa";
import Frase from "./components/Frase/Frase";

export function App() {

    return (
        <div className="App">
            <Frase/>

            <h1>Seja vem vindo ao meu projeto react!</h1>
            <Pessoa
                nome="Ezequias"
                idade="24 anos"
                profissao="Programador"
            />
        </div>
    );
}