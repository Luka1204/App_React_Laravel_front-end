import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint =    'http://localhost:8000/api/persona/';
const EditPersona = () =>{
    const [nombre, setNombre ] = useState('');
    const [apellido, setApellido ] = useState('');
    const [nacionalidad, setNacionalidad ] = useState('');
    const [localidad, setLocalidad ] = useState('');
    const [direccion, setDireccion ] = useState('');
    const [dni, setDni ] = useState('');
    const [fecha_nac, setFecha ] = useState('');
    const [telefono, setTelefono ] = useState('');
    const [email, setEmail ] = useState('');
    const [tipo_atencion, setAtencion ] = useState('');
    const [tipo_persona, setTipo ] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const update = async(e)=>{
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {nombre : nombre, apellido : apellido, nacionalidad : nacionalidad, localidad : localidad, direccion: direccion, dni : dni, fecha_nac : fecha_nac, telefono:telefono, email: email, tipo_atencion:tipo_atencion, tipo_persona : tipo_persona})
        navigate('/')
    }

    useEffect( () =>{

        const getPersonaById = async () => {
            const response = await axios.get(`${endpoint}${id}`);

            setNombre(response.data.nombre)
            setApellido(response.data.apellido)
            setNacionalidad(response.nacionalidad)
            setLocalidad(response.data.localidad)
            setDireccion(response.data.direccion)
            setDni(response.data.dni)
            setFecha(response.data.fecha_nac)
            setTelefono(response.data.telefono)
            setEmail(response.data.email)
            setAtencion(response.data.tipo_atencion)
            setTipo(response.data.tipo_persona)

        }
        getPersonaById()
        
        }, [])
    return(
        <div>
            <h2>Editar una nueva persona {nombre} </h2>
            <form onSubmit={update}>
            <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input value={nombre} onChange={(e)=>setNombre(e.target.value)} type='text' className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Apelido</label>
                    <input value={apellido} onChange={(e)=>setApellido(e.target.value)} type='text' className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Nacionalidad</label>
                    <input value={nacionalidad} onChange={(e)=>setNacionalidad(e.target.value)} type='text' className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Localidad</label>
                    <input value={localidad} onChange={(e)=>setLocalidad(e.target.value)} type='text' className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Direccion</label>
                    <input value={direccion} onChange={(e)=>setDireccion(e.target.value)} type='text' className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">DNI</label>
                    <input value={dni} onChange={(e)=>setDni(e.target.value)} type='text' className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Fecha de Nacimiento</label>
                    <input onChange={(e)=>setFecha(new Date(e.target.value.substring(0,10)))} type='date' className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input value={telefono} onChange={(e)=>setTelefono(e.target.value)} type='text' className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' className="form-control"/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Tipo de Atencion</label>
                    <select  onChange={(e)=>setAtencion(e.target.value)}className="form-control" >
                        <option selected>Seleccione un opcion...</option>
                        <option value="Presencial" >Presencial</option>
                        <option value="Telefonica" onChange={(e)=>setAtencion(e.target.value)}>Telefonica</option>
                    </select>
                   {/*  <input value={tipo_atencion} onChange={(e)=>setAtencion(e.target.value)} type='text' className="form-control"/>*/} 
                </div>

                <div className="mb-3">
                    <label className="form-label">Tipo</label>
                    <select  onChange={(e)=>setTipo(e.target.value)}className="form-control" >
                        <option selected>Seleccione un opcion...</option>
                        <option value="Transmitiente" >Transmitiente</option>
                        <option value="Adquiriente" >Adquiriente</option>
                    </select>
                    {/* <input value={tipo_persona} onChange={(e)=>setTipo(e.target.value)} type='text' className="form-control"/> */}
                </div>
                <button type='submit' className='btn btn-success'>Save</button>
            </form>
        </div>
    )

}

export default EditPersona;