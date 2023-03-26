import React from 'react';

const FrameMaps = ()=>{
    return(
        <>
        <h2 className='my-6 p-5 mx-auto lg:text-center text-justify mt-2  text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          Atendemos Sabará e região, veja onde estamos !</h2>
        <div className=' flex justify-center mt-8 mb-16'>
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.4604154030576!2d-43.865621685405834!3d-19.862771341350893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69cabdbfdb627%3A0xfa8eee27446edc38!2sR.%20Rio%20Verde%20-%20Nossa%20Sra.%20de%20Fatima%2C%20Sabar%C3%A1%20-%20MG%2C%2034600-390!5e0!3m2!1spt-BR!2sbr!4v1665974503161!5m2!1spt-BR!2sbr" 
          width="600" 
          height="450" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        </>
    )
}

export default FrameMaps;