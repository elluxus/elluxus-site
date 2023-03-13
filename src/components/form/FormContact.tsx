import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import React,{FormEvent, isValidElement, useState} from 'react';
import * as Yup from 'yup'
//import InputForm from './InputForm.js';



export const FormContact = () => {
  
    /*const initialState = {
      name:'',
      email:'',
      number:'',
      message:'',
      date: new Date().toLocaleDateString()
    }*/
    //const [dataForm, setDataForm ] = useState(initialState) 
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    const nameRegex = /^[a-z A-Z]+$/; 
    const schemaValidation = Yup.object().shape({
        name: Yup
          .string()
          .min(3,'o nome deve ter mais que 3 caracteres')
          .matches(nameRegex,'esse formato nao é valido')
          .required('o seu nome é nescessario'),
        email: Yup
          .string()
          .email('o email deve ser valido')
          .required('o email é invalido'),
        number: Yup
          .string()
          .min(9,'o numero deve conter no minino 11 numeros com o DDD')
          .max(12,'o numero deve conter 11 numeros com o DDD')
          .matches(phoneRegex,'coloque o formato certo')
          .required('o numero de celular com DDD é nescessario'),
        message: Yup
          .string()
          .required('não deixe de mandar sua mensagem'),
        date: Yup
          .string()
          .default(() => new Date().toLocaleDateString())
      })

    /*const submitContact = async (e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      
      const response = await fetch('api/submit',{
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(dataForm)
      });
      
      const content = await response.json()
      alert("Sua mensagem foi enviada com sucesso Por favor envie somente uma mensagem")
      setDataForm(initialState)
    }*/

    /*const onChangeInput = ({target}) =>setDataForm({
      ...dataForm, 
      [target.name]:target.value
    })*/
    
    async function onSubmit(){
      const valid = await schemaValidation.validate(values)
      if(valid){
        alert('Sua mensagem foi enviada com sucesso')
        const response = await fetch('api/submit',{
          method: 'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          body:JSON.stringify(values,null,5)
        });
        const content = await response.json()
        resetForm()
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


    /*function renderError(message:String){
      return <p className='text-pink-500'>{message}</p>
    }*/

  return (
    <div className='h-auto w-[100%] px-4 py-8'>
      <div className='flex w-auto h-auto p-16 border-t
      border-b border-[#D7B34C] itens-center justify-center'>
        {/*inicio formulario*/}
        {/*<Formik 
          validationSchema={formik.validateForm}
          initialValues={formik.initialValues} 
          onSubmit={ async ( values,{ resetForm })=>{
            console.log(values)
            resetForm();
          }}
          //validate={validade}
          >
          {({handleSubmit,handleChange,values,errors,touched})=>(*/}     
            <form onSubmit={handleSubmit} className='md:w-[50%] md:flow-wrap md:justify-center'>
              <div className='relative w-[100%] mb-6 mx-auto my-0'>
                <label /*className='absolute text-gray-500 top-[5px] left-[15px]
                  transition focus:origin-left-top focus:scale-50'*/
                  htmlFor="name" 
                  >Seu Nome</label>
                <input className={`peer w-[100%] p-2 rounded border border-[#d4d6d8] 
                  font-xs flex-column transition transition-shadow ease-in-out 
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
                  font-xs flex-column transition transition-shadow ease-in-out 
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
                  font-xs flex-column transition transition-shadow ease-in-out 
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
                py-4 px-8 shadow-lg uppercase tracking-wider border-2
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
          {/*)}
        </Formik>*/}

        {/*fim formulario*/}
        <div>
        </div>
      </div>
    </div>
  )
}
