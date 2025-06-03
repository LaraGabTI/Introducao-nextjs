import Image from "next/image";

interface NavBarProps { //lista de objetos
        links: {
            href: string
            label: string
        }[]
    }

export default function NavBar({links}: NavBarProps) {
    
    
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
                            {
                                links.map((link, indice)=>(
                                <a 
                                key={indice} 
                                href={link.href}
                                className=" text-lg
                                    font-medium
                                    hover:text-indigo-600"
                                >

                                    {link.label}
                                </a>
                            ))
                        }

                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}