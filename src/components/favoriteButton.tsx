"use client"

import { useState } from "react"
import { Button } from "./ui/button"

export function FavouriteButton({ name }: { name: string }) {

    const [saved, setSaved] = useState<boolean>(false)

    return (
        <Button variant="success"
            onClick={() => setSaved((current) => !current)}>
            {saved ? name + " guardado" : "Guardar " + name}
        </Button>
    )
}