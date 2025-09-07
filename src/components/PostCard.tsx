"use client";
import React from "react";

type PostCardProps = {
    id: string;
    author: string;
    content: string;
    likes: number;
    onLike: (id: string) => void;
};

export function PostCard({ id, author, content, likes, onLike }: PostCardProps) {
    return (
        <li className="rounded-xl border p-4">
            <div className="text-sm opacity-70">@{author}</div>
            <p className="mt-1">{content}</p>

            <div className="mt-3 flex items-center gap-3">
                <button
                    type="button"                
                    onClick={() => onLike(id)}
                    className="rounded-full px-3 py-1 text-sm border hover:bg-black/5"
                    aria-label={`Curtir post ${id}`}
                >
                    Curtir
                </button>
                <span className="text-sm opacity-80" aria-live="polite">
                    ❤️ {likes}
                </span>
            </div>
        </li>
    );
}
