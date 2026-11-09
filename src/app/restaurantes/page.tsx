
import { RestaurantCard } from "@/components/restaurantCard";
import { restaurants } from "@/data/restaurants";

export default function Restaurantes() {
    return (
        <>
            <h1 className="text-4xl">Pagina do restaurante</h1>
            <div className="flex flex-col gap-2">
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.slug}
                        restaurant={restaurant}
                    />
                ))}
            </div>

        </>
    )
}