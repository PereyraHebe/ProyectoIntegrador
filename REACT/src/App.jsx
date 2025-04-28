{/*import { useState } from  'react'*/} 
import './App.css';
import Saludo from './componentes/Saludo';
import Presentacion from './componentes/Presentacion';
import Cabecera from './componentes/Cabecera';
import PieDePagina from './componentes/PieDePagina';
import Productos from './componentes/Productos';



function App() {
  return (
    <>
      <Cabecera/>

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
            {/*<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bgblue-700">
           Click aqui
            </button> NO PUDE HACER QUE FUNCIONARA EL FONDO*/}
            <button className="bg-blue-500 text-blue px-4 py-2 rounded hover:bgblue-700">
           Click aqui
            </button> {/*mismo boton (provisorio) con otro color de letra para que se vea*/}

          </div>

          
          <div className="mt-8 flex justify-center items-center">
            <Presentacion nombre="Hebe" edad={37} profesion="Estudiante" />
          </div>
        </div>
      </section>
      <PieDePagina/>
    </>
  );
}

export default App;
