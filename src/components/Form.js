import {useState} from 'react'

export default function Form() {

    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log("Usuário cadastrado")
        console.log(`Nome: ${name}`);
        console.log(`Password: ${password}`);
    }

    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" placeholder="Digite o seu nome"
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" placeholder="Digite a sua senha"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}