import Image from "next/image"

export const FeaturedSection = ({title,description,image,emoji,color})=>{
    return (
        <section className="container bg-gray-100 px-5 py-24 mx-auto flex flex-col">
        <h2 className="text-center text-4xl font-bold mb-8">{title}, {emoji}</h2>
        <div className=" drop-shadow-lg p-6 bg-white mx-auto rounded
        flex flex-col sm:flex-row justify-center items-center mb-16">
          <div 
          className="
          relative justify-center w-72 h-72 mb-10 sm:mb-0 ">
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
          </div>
          {/* <div className="relative w-72 h-72">
          </div> */}
        </div>
        <p className={` text-justify text-lg leading-relaxed mx-auto lg:w-[65%]
        bg-white p-4 rounded border-2 ${color}`}>{description}</p>
      </section>

    )
}