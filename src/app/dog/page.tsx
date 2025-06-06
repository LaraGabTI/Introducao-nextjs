'use client'
import { useEffect, useState } from "react"

type Dog = {
    message: string;
}

export default function dog() {

    const [dogs, setDog] = useState<Dog>()

    const fetchDog = async () => {   /*espere o pedido await */
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json() //pega a resposta em formato json
        setDog(data) //atualizando para mostrar
    }
    useEffect(() => {  //toda vez que recarrega a pag
        fetchDog(); //execute isso
    }, [])

    



    return (
        <div>
            <div className="flex justify-center">
                <h3>Random Dog 🐶</h3>
            </div>

            <div className="flex justify-center">
                <img className="w-80 h-80 rounded-2xl" src={dogs?.message}></img>
            </div>

            <div className="flex justify-center">
                <button className="bg-blue-700 rounded p-3 mt-2 text-white" onClick={fetchDog}> Buscar Outro Cachorro</button>
            </div>
        </div>
    )
}