import Image from "next/image";

interface CardProps { //lista de objetos
        icone: string
        titulo: string
        subtitulo: string
}

export default function Card({ icone, titulo, subtitulo }: CardProps) {


    return (
        <section className="flex flex-wrap gap-6 p-6 justify-center">
            {
                <a className="max-w-sm bg-white rounded-xl shadow-md p-6 w-64">
                    <div className="text-3xl mb-3 text-center">{icone}</div>
                    <h2 className="text-xl font-semibold text-gray-800 text-center">
                        {titulo}
                    </h2>
                    <p className="text-sm text-gray-600 text-center mt-1">
                        {subtitulo}
                    </p>

                </a>

            }


        </section>
    )
}