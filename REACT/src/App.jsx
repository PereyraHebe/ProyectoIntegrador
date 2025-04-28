{/*import { useState } from  'react'*/} 
import './App.css';
import Saludo from './componentes/Saludo';
import Presentacion from './componentes/Presentacion';

function App() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              Proyecto Diagnóstico.
            </h1>
                  
          </div>
      
          
          
          <div className="caja_saludo flex justify-center items-center mt-8">
            <h2>Bienvenido!</h2>
            <Saludo nombre="Martín" />
            </div>
            <div className='mt-8 flex justify-center'>
            <button style={{ backgroundColor: 'blue', color: 'white', borderRadius: '8px', padding: '8px 16px' }}>
            Click aquí.
            </button>
          </div>

          
          <div className="mt-8 flex justify-center items-center">
            <Presentacion nombre="Hebe" edad={37} profesion="Estudiante" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
