import Image from "next/image";

export default function NavBar() {

    return (
        <div>
            <nav className="bg-amber-50 shadow-sm">
                <div className="px-4">  {/*Padding*/}
                    <div className="flex justify-between h-16">

                        <div className="flex items-center">
                            <Image
                                src="/next.svg"
                                alt="logo nextjs"
                                width={40}
                                height={40}
                            />
                            <span className="ml-2"> Next App</span>
                        </div>

                        <div className="flex space-x-6 items-center">
                            <a href="" className=" text-lg font-medium hover:text-indigo-600">
                                Inicio
                            </a>
                            <a href="" className="text-lg font-medium hover:text-indigo-600">
                                Recursos
                            </a>
                            <a href="" className="text-lg font-medium hover:text-indigo-600">
                                Contatos
                            </a>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}