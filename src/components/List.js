import Item from "./Item";

export default function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2003}/>
                <Item marca="Fiat" ano_lancamento={2026}/>
                <Item marca="Wolksvagem" ano_lancamento={1993}/>
                <Item />
            </ul>
        </>
    )
}