
    /*
    * it is to FormContact.jsx

     /*const initialState = {
      name:'',
      email:'',
      number:'',
      message:'',
      date: new Date().toLocaleDateString()
    }
    //const [dataForm, setDataForm ] = useState(initialState) 

    const submitContact = async (e:FormEvent<HTMLFormElement>)=>{
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
    })
    
    {/*inicio formulario*/
        /*<Formik 
          validationSchema={formik.validateForm}
          initialValues={formik.initialValues} 
          onSubmit={ async ( values,{ resetForm })=>{
            console.log(values)
            resetForm();
          }}
          //validate={validade}
          >
          {({handleSubmit,handleChange,values,errors,touched})=>(*/
    