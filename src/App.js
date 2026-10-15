import './App.css';
import {SayMyName} from "./components/SayMyName";
import {Pessoa} from "./components/Pessoa";

export function App() {

    const nome = "Henrique"

    return (
        <div className="App">
            <SayMyName nome="Rian"/>
            <SayMyName nome={nome}/>
            <Pessoa
                nome="Ezequias"
                idade="24 anos"
                profissao="Programador"
            />
        </div>
    );
}