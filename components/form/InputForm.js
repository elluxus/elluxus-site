import React,{useState} from 'react'

const InputForm = () => {
  const [name, setName] = useState('')


  return (
    <>
      <input
        value={name}
        onChange={({target})=>setName(target.value)}
      />
      <label>name</label>
    </>
  )
}

export default InputForm