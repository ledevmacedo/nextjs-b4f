import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl text-blue-500">hello world</h1>
      <Link href={'/restaurantes'} >RESTAURANTES</Link>
    </>
  );
}

//PAGINAS É COM EXPORT DEFAULT FUNCTION
//COMPONENTES COM EXPORT FUNCTION