import Link from "next/link"
import type { Restaurant } from "@/data/restaurants"

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
    return (
        <>
            <div className="w-full p-2 rounded-xl border text-2xl flex flex-col gap-2">
                <p>{restaurant.cuisine} -  {restaurant.area}</p>
                <h2 className="text-xl font-semibold">{restaurant.name} </h2>
                <Link href={"/restaurantes/" + restaurant.slug}></Link>
                <Link href={`/restaurnates/${restaurant.slug}`}></Link>
            </div>
        </>
    )
}