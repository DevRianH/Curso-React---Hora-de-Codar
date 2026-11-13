function gerarSaudacao(algumNome) {
    return `Olá ${algumNome}, tudo bem?`
}

export function Saudacao({userName}) {
    return (
        <>
            {userName && <p>{gerarSaudacao(userName)}</p>}
        </>
    )
}