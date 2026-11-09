"use client"

import { useState } from "react"

export function FavouriteButton({ name }: { name: string }) {

    const [saved, setSaved] = useState<boolean>(false)

    return (
        <button className="border border-red-500"
            onClick={() => setSaved((current) => !current)}>
            {saved ? name + " guardado" : "Guardar " + name}
        </button>
    )
}