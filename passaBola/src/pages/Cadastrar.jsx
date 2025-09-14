import { useState } from "react"

export default function Cadastrar(){
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  function handleSubmit(ev){
    ev.preventDefault()
    console.log("Cadastrado com sucesso")
  }

  return(
    <form className="w-110 h-80 bg-gray-100 mt-20 mx-auto p-4 flex flex-col border-2 border-b-gray-400 rounded-xl" onSubmit={()=>handleSubmit(ev)} >
      <label htmlFor="email" >Email:</label>
      <input type="email" id="email" value={email} onChange={(ev)=>setEmail(ev.target.value)} required />
      <label htmlFor="password">Senha:</label>
      <input type="text" id="password" value={password} onChange={(ev)=>setPassword(ev.target.value)} required />
      <button type="submit">Cadastrar</button>
    </form>
  )
}