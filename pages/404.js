import Link from 'next/link';
import dynamic from 'next/dynamic';
const Navbar = dynamic(()=>import("../src/layout/navbar"),{ssr:false});


function Button({ href, children }) {
  return (
    <Link href={href}>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {children}
      </a>
    </Link>
  );
}

export default function Custom404() {
  return (
    <div>
    <Navbar/>
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl font-bold">404 - Página não encontrada</h1>
      <p className="text-xl mb-8">
        Desculpe, mas a página que você está procurando não existe.
      </p>
      <Button href="/">Voltar à página inicial</Button>
    </div>
    </div>
  );
}
