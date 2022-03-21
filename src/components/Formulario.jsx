
import {nanoid} from 'nanoid'
import React from 'react';
//import { fire } from '../firebase';

export const Formulario = () => {

    const [MarcaTorre, setMarcaTorre] = React.useState('')
    const [ModeloTorre, setModeloTorre] = React.useState('')
    const [MarcaMonitor, setMarcaMonitor] = React.useState('')
    const [ModeloMonitor, setModeloMonitor] = React.useState('')
    const [MarcaMouse, setMarcaMouse] = React.useState('')
    const [ModeloMouse, setModeloMouse] = React.useState('')
    const [MarcaTeclado, setMarcaTeclado] = React.useState('')
    const [ModeloTeclado, setModeloTeclado] = React.useState('')
    const [Equipos, setEquipos] = React.useState([])
    const [id, setId] = React.useState('')
    const [error, setError] = React.useState(null)
    const [modoEdicion, setModoEdicion] = React.useState(false)


    const AgregarEquipos = e => {
      e.preventDefault()
  
      if(!(MarcaTorre.trim() && ModeloTorre.trim() && MarcaMonitor.trim() && ModeloMonitor.trim() && 
            MarcaMouse.trim() && ModeloMouse.trim() && MarcaTeclado.trim() && ModeloTeclado.trim() )){
        setError('Favor validar que los campos no esten vacios')
        return
      }
  
      setEquipos([
        ...Equipos,
        {id: nanoid(), MarcaTorre:MarcaTorre, ModeloTorre:ModeloTorre, MarcaMonitor:MarcaMonitor, ModeloMonitor:ModeloMonitor, MarcaMouse:MarcaMouse, ModeloMouse:ModeloMouse, MarcaTeclado:MarcaTeclado, ModeloTeclado:ModeloTeclado}
      ])
  
      setMarcaTorre('')
      setModeloTorre('')
      setMarcaMonitor('')
      setModeloMonitor('')
      setMarcaMouse('')
      setModeloMouse('')
      setMarcaTeclado('')
      setModeloTeclado('')
      setId('')
      setError(null)
    }
  
    const EliminarEquipos = id => {
      const arrayAux = Equipos.filter(item => item.id !== id)
      setEquipos(arrayAux)

      setModoEdicion(false)
      setMarcaTorre('')
      setModeloTorre('')
      setMarcaMonitor('')
      setModeloMonitor('')
      setMarcaMouse('')
      setModeloMouse('')
      setMarcaTeclado('')
      setModeloTeclado('')
      setId('')
      setError(null)

    }
  
    const editar = item =>{
      setError(null)
      setModoEdicion(true)
      setMarcaTorre(item.MarcaTorre)
      setModeloTorre(item.ModeloTorre)
      setMarcaMonitor(item.MarcaMonitor)
      setModeloMonitor(item.ModeloMonitor)
      setMarcaMouse(item.MarcaMouse)
      setModeloMouse(item.ModeloMouse)
      setMarcaTeclado(item.MarcaTeclado)
      setModeloTeclado(item.ModeloTeclado)
      setId(item.id)
    }
  
    const cancelar = () =>{
      setModoEdicion(false)
      setMarcaTorre('')
      setModeloTorre('')
      setMarcaMonitor('')
      setModeloMonitor('')
      setMarcaMouse('')
      setModeloMouse('')
      setMarcaTeclado('')
      setModeloTeclado('')
      setId('')
      setError(null)
    }
  
    const editarEquipos = e =>{
      e.preventDefault()
      if(!(MarcaTorre.trim() && ModeloTorre.trim() && MarcaMonitor.trim() && ModeloMonitor.trim() && 
            MarcaMouse.trim() && ModeloMouse.trim() && MarcaTeclado.trim() && ModeloTeclado.trim() )){

            setError('Favor validar que los campos no esten vacios')
            return
        }
  
      const arrayEditado = Equipos.map(
        item => item.id=== id ? {id:id, MarcaTorre:MarcaTorre, ModeloTorre:ModeloTorre, MarcaMonitor:MarcaMonitor, ModeloMonitor:ModeloMonitor, MarcaMouse:MarcaMouse, ModeloMouse:ModeloMouse, MarcaTeclado:MarcaTeclado} : item
        )
  
        setEquipos(arrayEditado)
        setMarcaTorre('')
        setModeloTorre('')
        setMarcaMonitor('')
        setModeloMonitor('')
        setMarcaMouse('')
        setModeloMouse('')
        setMarcaTeclado('')
        setModeloTeclado('')
        setId('')
        setError(null)
        setModoEdicion(false)
    }
  
    return (
      <div className="container mt-5">
        <h1 className="text-center">Equipos</h1>
        <hr />
        <div className="row">          
          <div className="col-4">
            <h4 className="text-center">
              {
                modoEdicion ? 'Editar Equipo' : 'Agregar Equipo'
              }
            </h4>
            <form onSubmit={modoEdicion ? editarEquipos : AgregarEquipos}>
              {
                error ? <span className='text-danger'>{error}</span> : null
              }
  
              <input
                type="text"
                className='form-control mb-2'
                placeholder='Ingrese marca de la torre'
                onChange={e => setMarcaTorre(e.target.value)}
                value = {MarcaTorre}
              />
              <input
                type="text"
                className='form-control mb-2'
                placeholder='Ingrese modelo de la torre'
                onChange={e => setModeloTorre(e.target.value)}
                value = {ModeloTorre}
              />
              <input
                type="text"
                className='form-control mb-2'
                placeholder='Ingrese marca del monitor'
                onChange={e => setMarcaMonitor(e.target.value)}
                value = {MarcaMonitor}
              />
              <input
                type="text"
                className='form-control mb-2'
                placeholder='Ingrese modelo del monitor'
                onChange={e => setModeloMonitor(e.target.value)}
                value = {ModeloMonitor}
              />
              <input
                type="text"
                className='form-control mb-2'
                placeholder='Ingrese marca del mouse'
                onChange={e => setMarcaMouse(e.target.value)}
                value = {MarcaMouse}
              />
              <input
                type="text"
                className='form-control mb-2'
                placeholder='Ingrese modelo del mouse'
                onChange={e => setModeloMouse(e.target.value)}
                value = {ModeloMouse}
              />
              <input
                type="text"
                className='form-control mb-2'
                placeholder='Ingrese marca del teclado'
                onChange={e => setMarcaTeclado(e.target.value)}
                value = {MarcaTeclado}
              />
              
              <input
                type="text"
                className='form-control mb-2'
                placeholder='Ingrese modelo del teclado'
                onChange={e => setModeloTeclado(e.target.value)}
                value = {ModeloTeclado}
              />
  
              {
                modoEdicion ?
                (<>
                  <button
                  className="btn btn-warning btn-block" 
                  type='submit'>Editar</button>
                  <button
                  className="btn btn-dark btn-block mx-2" 
                  onClick ={() => cancelar()}>Cancelar</button>
                  </>)
                  : 
                  (<button
                    className="btn btn-dark btn-block" 
                    type='submit'>Agregar</button>
                    )
              }
              
            </form>
          </div>
          <div className="col-8">
            <h4 className="text-center">Listados de Equipos</h4>
            <ul className="list-group">
              {
                Equipos.map(item => (
                  <li className="list-group-item" key={item.id}>
                    <span className="lead">{item.MarcaTorre}</span>    
                        <button 
                          className='btn btn-danger btn-sm float-end mx-2'
                          onClick={() => EliminarEquipos(item.id)}>Eliminar</button>
                        <button 
                        className='btn btn-warning btn-sm float-end'
                        onClick ={() => editar(item)}>Editar</button>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        
      </div>
    );
  }
export default Formulario
