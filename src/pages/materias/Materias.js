import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Popup from '../profesores/popup/Popup'
import materias from '../../assets/materias.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './materias.scss'

const Materias = () => {
  const [materia,setMateria] = useState(false);
  return (
    <div className='materias'>
          <Sidebar/>
        <div className='main'>
            <Navbar/>
            <div className="container">
              
                <button className='anadir' onClick={()=> setMateria(true)}>
                  + Añadir Materia
                </button>
             

            <img src={materias} alt={materias} />
             <p>Ingresá el nombre de la Materia</p>
              <input type="text" placeholder='Buscar' />
              <Link to='buscar-materias'>
              <button >
                Buscar
              </button>
              </Link>
            </div>
            
        </div>
        <Popup classname='popup' trigger={materia}>
          <h2>Añadir Materia</h2>
         <div className="row">
           <label>Nombre:</label>
         <input type="text" />
         </div>
         <div className="row">
         <label>Especialidad:</label>
          <input type="text" />
         </div>
          <button>Guardar</button>
          <button onClick={()=> setMateria(false)}>Cancelar</button>
          </Popup>
    </div>
  )
}

export default Materias