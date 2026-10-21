export default function Eventos({numero}){

    function meuEvento(){
        console.log(`Meu Evento ${numero}`);
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}