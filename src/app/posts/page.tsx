'use client'
import { useEffect, useState } from "react"

type Post= {
    id: number;
    title: string;
    body: string;
}

export default function PostPage(){
    
    const[posts, setPosts] = useState<Post[]>([])

    useEffect(()=>{  //função assincrona (async)
        const fetchPosts = async ()=>{   /*espere o pedido await */
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            const data = await res.json() //pega a resposta em formato json
            setPosts(data) //atualizando para mostrar
        }
        fetchPosts(); //execute isso
    }, [])
    
    return(
        <div> 

            {posts.map((post)=>(
                <li key={post.id}>
                <h2>{post.title}</h2>
                </li>
            ))}

        </div>
    )
}