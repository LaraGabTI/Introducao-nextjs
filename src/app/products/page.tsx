
export default function products(){
    
    const products = [
        {id: 1, name: "arroz", price: 1.99},
        {id: 2, name: "café", price: 3.99},
        {id: 3, name: "pão", price: 5.99},
    ]
    return(
        <div>
            <h1> Lista de Produtos </h1>
            <ul>{products.map((products)=>{ //index é o indice do array
                       return(<li key={products.id}>{products.name}{products.price}</li>) 
                    })}
            </ul>
        </div>
    )
}