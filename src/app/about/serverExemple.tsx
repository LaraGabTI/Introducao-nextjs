'use Cliente'

export default function ServerExemple(){
    //const data = await fetchDataFromDB() //chamada direta no banco
    const data = 'dados do banco de dados'

    return(
        <div>
            <h1> Dados do servidor </h1>
            <p> {data}</p>
            {/* <ClientCounter></ClientCounter> */}
        </div>
    )

}
