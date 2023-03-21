import Image from 'next/image'

const Projetos = () => {
  const projetos = [
    { id: 1, nome: 'Projeto: Armario de Cozinha na cor Preta', imagem: '/imgs/projeto-1.jpg' },
    { id: 2, nome: 'Projeto: Armario de Cozinha na cor Bege', imagem: '/imgs/projeto-2.jpg' },
    { id: 3, nome: 'Projeto: Armario de Cozinha na cor Branca', imagem: '/imgs/projeto-3.jpg' },
    { id: 4, nome: 'Projeto: Armario para banheiro na cor Branca', imagem: '/imgs/projeto-4.jpg' },
    { id: 5, nome: 'Projeto: Planejado Sala com Mesanino', imagem: '/imgs/projeto-5.jpg' },
    { id: 6, nome: 'Projeto: Armario de cozinha com porta tempeiros', imagem: '/imgs/projeto-6.jpg' },
  ];

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <div className="relative max-w-xl mx-auto lg:max-w-7xl">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Veja nossos projetos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Inspire-se com nossa galeria de imagens
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:max-w-none">
          {projetos.map(projeto => (
            <div key={projeto.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <Image
                  src={projeto.imagem}
                  alt={projeto.nome}
                  width={640}
                  height={620}
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {projeto.nome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projetos;
