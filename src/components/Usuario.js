import React, {useState, useEffect} from "react"

const Usuario = () =>{

    const [nameUser, setNameUser] = useState("")
    const [termContrato, setTermContrato] = useState(false)

    const handleUsuario = (evento) =>{
        //¿Dónde está en el evento lo que viene escrito
        //por el usuario desde el input de texto?
        // Respuesta: evento.target.value
        setNameUser(evento.target.value)
    }
    const handleTerminos = () =>{
        setTermContrato(!termContrato)
    }
    return(
        <>
        <h1>Usuario</h1>
        <label htmlFor="usuario">Indique el nombre del usuario</label><br/>
        <input type="text" name="usuario" placeholder="Por ej... Pepo"  onChange={handleUsuario}/><br/><br/>
        <br/><br/>
        {
            nameUser == "Emerson" &&
            <p>Ya existe ese Usuario</p>
        }
        <br/>
        <input type="checkbox" checked={termContrato} onChange={handleTerminos} name="terminos" />
        <label htmlFor="terminos">Acepto los términos de contrato</label><br/><br/>
        <button type="button">Guardar nombre de Usuario</button>
        </>
        
    )
}
export default Usuario