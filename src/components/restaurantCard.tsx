import Link from "next/link"
import type { Restaurant } from "@/data/restaurants"
import { Button } from "./ui/button"


export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
    return (
        <>
            <div className="w-full p-2 rounded-xl border text-2xl flex flex-col gap-2">
                <p>{restaurant.cuisine} -  {restaurant.area}</p>
                <h2 className="text-xl font-semibold">{restaurant.name} </h2>
                <Link href={"/restaurantes/" + restaurant.slug}>
                    <Button variant="success">Ir para</Button>
                </Link>
            </div>
        </>
    )
}