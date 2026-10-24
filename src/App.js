import './App.css';
import Eventos from "./components/Eventos";
import Form from "./components/Form";

function App() {

    return (
        <div className="App">
            <h1>Testanto eventos</h1>
            <Eventos numero={1}/>
        </div>
    );
}

export default App