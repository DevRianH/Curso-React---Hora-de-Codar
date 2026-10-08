import './App.css';
import HelloWorld from './components/HelloWorld.js'
import Frase from "./components/Frase";

function App() {

    const name = 'Rian'

    const newName = name.toUpperCase();

    function sum(a,b){
        return a + b
    }


    return (
        <div className="App">
            <h2>Alterando o JSX</h2>
            <p>Olá {newName}</p>
            <p>Soma: {sum(5,2)}</p>
            <HelloWorld/>
            <Frase/>
        </div>
    );
}

export default App;
