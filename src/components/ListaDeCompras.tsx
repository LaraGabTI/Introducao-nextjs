'use client';

import { useState } from 'react';

    interface Item {
        item: string;
        comprado: boolean;
    }

    export default function ListaDeCompras() {
    const [lista, setLista] = useState<Item[]>([
        { item: 'Arroz', comprado: false },
        { item: 'Feijão', comprado: false },
        { item: 'Macarrao', comprado: false },
    ]);

    const marcarComoComprado = (index: number): void => {
        setLista((atual) =>
        atual.map((item, i) => (i === index ? { ...item, comprado: true } : item))
        );
    };

    const celula: React.CSSProperties = {
        border: '1px solid #e5e7eb',
        padding: 8,
        textAlign: 'left',
    };

    return (
        <div style={{ maxWidth: 520, margin: '24px auto' }}>
        <h2 style={{ marginBottom: 12 }}>🛒 Lista de Compras</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead style={{ background: '#f8fafc' }}>
            <tr>
                <th style={celula}>Item</th>
                <th style={{ ...celula, width: 120 }}>Ação</th>
            </tr>
            </thead>
            <tbody>
            {lista.map((produto, index) => (
                <tr key={index}>
                <td
                    style={{
                    ...celula,
                    textDecoration: produto.comprado ? 'line-through' : 'none',
                    color: produto.comprado ? '#9ca3af' : '#111827',
                    }}
                >
                    {produto.item}
                </td>
                <td style={celula}>
                    <button
                    onClick={() => marcarComoComprado(index)}
                    disabled={produto.comprado}
                    style={{
                        padding: '6px 10px',
                        border: 'none',
                        borderRadius: 6,
                        background: produto.comprado ? '#d1d5db' : '#10b981',
                        color: '#fff',
                        cursor: produto.comprado ? 'not-allowed' : 'pointer',
                    }}
                    >
                    Marcar
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}
