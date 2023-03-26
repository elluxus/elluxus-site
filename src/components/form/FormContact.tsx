import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import React,{FormEvent, isValidElement, useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import * as Yup from 'yup';



export const FormContact = () => {
  
  const router = useRouter()

  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  
  const nameRegex = /^[a-z A-Z]+$/; 
  
  const schemaValidation = Yup.object().shape({
    name: Yup.string()
      .min(3,'o nome deve ter mais que 3 caracteres')
      .matches(nameRegex,'esse formato nao é valido')
      .required('o seu nome é nescessario'),
    email: Yup.string()
      .email('o email deve ser valido')
      .required('o email é invalido'),
    number: Yup.string()
      .min(9,'o numero deve conter no minino 11 numeros com o DDD')
      .max(12,'o numero deve conter 11 numeros com o DDD')
      .matches(phoneRegex,'coloque o formato certo')
      .required('o numero de celular com DDD é nescessario'),
    message: Yup.string()
      .required('não deixe de mandar sua mensagem'),
    date: Yup.string()
      .default(() => new Date().toLocaleDateString())
  })

  async function onSubmit(){
    const valid = await schemaValidation.validate(values);
    if(valid){
          
      const response = await fetch('api/submit',{
          method: 'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(values,null,5)
        });

        const content = await response.json()
        
        toast.success('Sua mensagem foi enviada com sucesso !')
        resetForm()
        router.push('/contato')
        
      }
    }
    
    const {
      values,
      handleBlur,
      handleChange,
      handleSubmit,
      errors,
      touched,
      resetForm
    } = useFormik({
      initialValues: {
        name:'',
        email:'',
        number:'',
        message:'',
        date: new Date().toLocaleDateString()
      },      
      validationSchema: schemaValidation,
      onSubmit,
    })

  return (
    <div id='section-target' className='h-auto w-[100%] px-4 py-8 bg-gray-100'>
      <div className='p-4'>
        <h1 className='my-6 mx-auto lg:text-center text-justify mt-2  text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          Não perca mais tempo sonhando com o seu lar ideal! 
        </h1>
        <h2 className='my-4 text-base lg:text-center text-justify text-indigo-600 font-semibold tracking-wide uppercase'>
          Preencha agora o nosso formulário de orçamento e comece a transformação da sua casa em realidade!
        </h2>
      </div>
      <div className='flex w-auto h-auto lg:p-16 border-t 
      border-b border-[#D7B34C] itens-center justify-center'>
        

            <form onSubmit={handleSubmit} className=' md:w-1/2 
            lg:w-[50%] bg-white p-4 rounded-md md:flow-wrap md:justify-center'>
              <div className='relative w-[100%] mb-6 mx-auto my-0'>
                <label 
                  htmlFor="name" 
                  >Seu Nome</label>
                <input className={`peer w-[100%] p-2 rounded border border-[#d4d6d8] 
                  font-xs flex-column transition ease-in-out 
                  duration-[0.2s] active:border active:border-[#084526] 
                  focus:outline-none focus:border-2 focus:border-[#084526] 
                  invalid:text-pink-500 invalid:border-pink-500 focus:invalid:border-pink-500
                  md:font-base ${ errors.name && touched.name? 'border-pink-500 text-pink-500':'' }`}
                  name="name" 
                  type='name' 
                  id="name" 
                  aria-label="Seu Nome"
                  value={values.name}
                  onChange={handleChange}
                />
                { errors.name && touched.name ? (
                  <span className='text-pink-500'>{errors.name}</span>
                ): null}
              </div>

              <div className='relative w-[100%] mb-6'>
                <label  
                  htmlFor="email" 
                  >Seu E-mail</label>
                <input className={`w-[100%] p-2 rounded border border-[#d4d6d8] 
                  font-xs flex-column transition-shadow ease-in-out 
                  duration-[0.2s] active:border active:border-[#084526] 
                  focus:outline-none focus:border-2 focus:border-[#084526] 
                  invalid:text-pink-500 invalid:border-pink-500 focus:invalid:border-pink-500 
                  md:font-base peer ${ errors.email && touched.email? 'border-pink-500 text-pink-500':'' }`} 
                  name="email" 
                  type='email' 
                  id="email" 
                  aria-label="Seu E-mail"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors.email && touched.email ? (
                  <span className='text-pink-500'>{errors.email}</span>
                ): null}
              </div>

              <div className='relative w-[100%] mb-6'>
                <label
                  htmlFor="number" 
                  >Seu Numero</label>
                <input className= {`w-[100%] p-2 rounded border border-[#d4d6d8] 
                  font-xs flex-column transition-shadow ease-in-out 
                  duration-[0.2s] active:border active:border-[#084526] 
                  focus:outline-none focus:border-2 focus:border-[#084526] 
                  md:font-base ${ errors.number && touched.number ? 'border-pink-500 text-pink-500':'' }`}
                  name="number"               
                  type='tel' 
                  id="number" 
                  aria-label="Seu Numero"
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="adicione o seu numero de contato com o DDD"
                />
                 { errors.number && touched.number ? (
                  <span className='text-pink-500'>{errors.number}</span>
                ): null}
              </div>

              <div className=' w-[100%] mb-6'>
                <label 
                  htmlFor="message" 
                  >Sua Mensagem</label>
                <input className= {`h-[200px] rounded border-2 border-gray
                  min-h-[160px] w-[100%] font-sans-serif p-8 leading-normal resize-none
                  ctive:border active:border-[#084526] focus:outline-none 
                  focus:border-2 focus:border-[#084526] 
                  invalid:text-pink-500 invalid:border-pink-500 focus:invalid:border-pink-500
                  md:font-base peer ${ errors.message && touched.message? 'border-pink-500 text-pink-500':'' }`}
                  type='textarea'
                  name="message"
                  aria-label="Sua Mensagem"
                  id="message"
                  value={values.message}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                 { errors.message && touched.message ? (
                  <span className='text-pink-500'>{errors.message}</span>
                ): null}
              </div>

              <button className={`bg-[#084923] font-bold rounded text-white
                py-4 px-8 shadow-lg uppercase tracking-wider border-2 w-full
                hover:bg-white hover:text-[#084923] hover:border-2 border-[#084923]
                transtion-all ease-in duration-[0.2s] `}
                //disabled={Object.keys(errors).length > 0}
                type="submit" 
                //disabled={!isValid}
                onClick={()=> handleSubmit}
               
                >
                  Enviar mensagem
                </button>
            </form>
            <ToastContainer />
        {/*fim formulario*/}
        <div>
        </div>
      </div>
    </div>
  )
}
