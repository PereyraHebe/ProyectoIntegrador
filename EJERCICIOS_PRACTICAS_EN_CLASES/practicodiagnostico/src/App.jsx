{/*import { useState } from  'react'*/} 
import './App.css'
import Card from './componentes/Card'
import CardTailwin from './componentes/CardTailwin'

function App() {
  

  return (
    <>
      
      <h1>Proyecto Diagnóstico</h1>
      <div className="card">
       
       <h2>Bienvenido al proyecto diagnostico</h2>
        
        <Card title="tarjeta uno" body="Aqui esta el contenido de la tarjeta uno"/>  
        <Card title="tarjeta dos" body="Aqui esta el contenido de la tarjeta dos"/>
        <Card title="tarjeta tres" body="Aqui esta el contenido de la tarjeta tres"/>        
        
        <CardTailwin />
      
      </div>
     
    </>
  )
}

export default App
