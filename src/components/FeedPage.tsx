"use client";
import { useState, useCallback } from "react";
import { PostCard } from "./PostCard";

type Publicacao = {
    id: string;
    autor: string;
    texto: string;
    curtidas: number;
    createdAt?: string;
};

const dadosIniciais: Publicacao[] = [
    { id: "p1", autor: "Lara", texto: "Não adianta eu sou do mar, nasci pra ter na pele o teu sol", curtidas: 2 },
    { id: "p2", autor: "Matheus", texto: "QUE dia em meus AMIGOS!", curtidas: 5 },
    { id: "p3", autor: "Heloisa", texto: "Cuidar de si é prioridade.", curtidas: 1 },
];

export default function FeedPage() {
    const [publicacoes, setPublicacoes] = useState<Publicacao[]>(dadosIniciais);

    const incrementarCurtidas = useCallback((id: string) => {
        setPublicacoes((anteriores) =>
            anteriores.map((p) =>
                p.id === id ? { ...p, curtidas: p.curtidas + 1 } : p
            )
        );
    }, []);

    const totalCurtidas = publicacoes.reduce((acc, p) => acc + p.curtidas, 0);

    return (
        <main className="mx-auto max-w-2xl p-4 space-y-4">
            <header className="flex items-baseline justify-between border-b pb-2">
                <h1 className="text-xl font-semibold">Feed</h1>
                <span className="text-sm opacity-70">Total: {totalCurtidas} curtidas</span>
            </header>

            <ul className="space-y-3">
                {publicacoes.map((p) => (
                    <PostCard
                        key={p.id}
                        id={p.id}
                        author={p.autor}
                        content={p.texto}
                        likes={p.curtidas}
                        onLike={incrementarCurtidas}
                    />
                ))}
            </ul>
        </main>
    );
}
