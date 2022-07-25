import React, {useEffect, useState} from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api';
const ShowPersonas = () =>{
    const [personas, setPersonas] = useState([]);
    useEffect ( ()=>{
        getAllPersonas();
    }, [])

    const getAllPersonas = async () =>{
        const response = await axios.get(`${endpoint}/personas`)
        setPersonas(response.data)
    }

    const deletePersona = async (id) =>{
        await axios.delete(`${endpoint}/persona/${id}`);
        getAllPersonas();
    }

   function filter(e){
      var text = e.target.value
      const data = this.state.getAllPersonas;
      const newData = data.filter(function(item){
          const itemData = item.titulo.toUpperCase()
          const textData = text.toUpperCase()
          return itemData.indexOf(textData) > -1
      })
      this.setState({
          producto: newData,
          text: text,
      })
   }
    return(
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
                </div>
                <table className='table table-striped'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Nacionalidad</th>
                            <th>Localidad</th>
                            <th>Direccion</th>
                            <th>DNI</th>
                            <th>Fecha Nacimiento</th>
                            <th>Telefóno</th>
                            <th>Email</th>
                            <th>Tipo Atencion</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        { personas.map( (persona) => (
                        <tr key={persona.id}>
                            <td>{persona.nombre}</td>
                            <td>{persona.apellido}</td>
                            <td>{persona.nacionalidad}</td>
                            <td>{persona.localidad}</td>
                            <td>{persona.direccion}</td>
                            <td>{persona.dni}</td>
                            <td>{persona.fecha_nac.substr(0,10)}</td>
                            <td>{persona.telefono}</td>
                            <td>{persona.email}</td>
                            <td>{persona.tipo_atencion}</td>
                            <td>{persona.tipo_persona}</td>
                            <td>
                                <Link to={`/edit/${persona.id}`} className='btn btn-info'>Edit</Link>
                                <button onClick={ ()=>deletePersona(persona.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                        ))} 
                </tbody>
            </table>
        </div>
    )
}

export default ShowPersonas;