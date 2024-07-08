import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"

const Inicio = () =>{
    return(
        <>
            <h1>Hola desde Inicio</h1>
            <div>
                <Link to="/Perfil">Ir a Perfil</Link><br/>
                <Link to="/Usuario">Ir a Usuario</Link>
            </div>
        </>
        
    )
}
export default Inicio