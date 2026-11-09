import { notFound } from "next/navigation"
import { restaurants } from "@/data/restaurants"
import { FavouriteButton } from "@/components/favoriteButton"

export default async function RestaurantPage({ params }: PageProps<"/restaurantes/[slug]">) {
    //logica
    const { slug } = await params
    const restaurant = restaurants.find((item) => item.slug === slug)
    if (!restaurant) notFound()

    return (
        <>
            <section className="border p-4 rounded-md flex flex-col gap-2">
                <p className="text-2xl"> Tipo de culinaria:
                    {restaurant.cuisine} Area: {restaurant.area} </p>
                <h1 className="text-4xl font-semibold">{restaurant.name} </h1>
                <FavouriteButton name={restaurant.name} />
            </section>
        </>
    )
}