import Link from "next/link";


export function Navbar() {
    return (
        <section className="w-full rounded-lg p-2 border border-slate-300 flex gap-2 items-center justify-center">
            <Link href="/">Home</Link>
            <Link href="/restaurantes">Restaurantes</Link>
            <Link href="/ementa">Ementa</Link>
        </section>
    )
}