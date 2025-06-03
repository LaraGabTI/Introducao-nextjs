import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div>
        <NavBar links={[ 
          {label:'Inicio', href:'/'},
          {label:'Sobre Nós', href:'/about'},
          {label:'Produtos', href:'/product'}]}/>
      </div>
      <div className=" flex">
         <Card icone="🚀" titulo="Subiu" subtitulo="wudwudus"/>
         <Card icone="🚀" titulo="Subiu" subtitulo="wudwudus"/>
         <Card icone="🚀" titulo="Subiu" subtitulo="wudwudus"/>

      </div>
      </div>   
  )
}
// 🚀
