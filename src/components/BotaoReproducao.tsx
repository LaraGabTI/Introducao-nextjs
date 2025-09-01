'use client';

import { useState } from "react";

export default function BotaoReproducao() {
    
    const [tocando, setTocando] = useState<boolean>(false);

    const alternaReproducao = (): void => {
        setTocando((estadoAtual) => !estadoAtual);
    };

    return (
        <button
        onClick={alternaReproducao}
        className="px-4 py-2 rounded-md text-white font-semibold"
        style={{ backgroundColor: tocando ? "#b91c1c" : "#15803d" }}
        >
        {tocando ? "Pause" : "Play"}
        </button>
    );
}
