import NavBar from "@/components/NavBar";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
        <NavBar links={[ 
          {label:'Inicio', href:'/'},
          {label:'Sobre Nós', href:'/about'},
          {label:'Produtos', href:'/product'}]}/>
      </div>   
  )
}
