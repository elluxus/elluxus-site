import { useState, useEffect } from 'react';

const Depoimentos = () => {
  const [depoimentos, setDepoimentos] = useState([
    { id: 1, nome: 'João', texto: 'Os móveis ficaram perfeitos, a equipe foi super profissional e atenciosa. Recomendo muito!' },
    { id: 2, nome: 'Maria', texto: 'Fiquei muito feliz com o resultado, minha cozinha ficou linda e super funcional. Obrigada!' },
    { id: 3, nome: 'Pedro', texto: 'Excelente trabalho, fiquei muito satisfeito com a qualidade e o prazo de entrega. Parabéns!' },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex === depoimentos.length - 1 ? 0 : currentIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, depoimentos]);

  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">O que nossos clientes dizem</h2>
        </div>
        <div className="mt-10">
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 sm:h-80">
              {depoimentos.map((depoimento, index) => (
                <div
                  key={depoimento.id}
                  className={`absolute w-full h-full transform transition-all duration-1000 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="relative rounded-lg shadow-lg bg-white overflow-hidden">
                        <div className="px-6 py-8 sm:p-10">
                          <blockquote>
                            <div className="text-lg font-medium text-gray-900">
                              &ldquo;{depoimento.texto}&rdquo;
                            </div>
                            <footer className="mt-4">
                              <p className="text-base font-semibold text-indigo-600">{depoimento.nome}</p>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              {depoimentos.map((depoimento, index) => (
                <button
                  key={depoimento.id}
                  className={`mx-2 bg-gray-300 rounded-full w-4 h-4 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-50'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depoimentos;
