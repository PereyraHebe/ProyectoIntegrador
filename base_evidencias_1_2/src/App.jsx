import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
//impotacion de componentes
import TarjetaProducto from "./assets/componentes/TarjetaProducto";


function App() {
  const [productos, setProductos] = useState([]);
  const [buscador, setBuscador] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=180").then((res) => {
      setProductos(res.data.products);
    });
  }, []);

  //filtracion de productos 
  const productosFiltrados= productos.filter((p)=>p.title.toLowerCase().includes(buscador.toLowerCase()))

  return (
    < div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">- Proyecto Integrador - Evaluación 1 y 2</h1>
      
      <h2 className="text-xl font-semibold mb-2">Productos de Dummyjson.com</h2>

      <input type="text" placeholder="Busca tu producto aqui" value={buscador} 
      onChange={(e)=>{setBuscador(e.target.value)}}/>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productosFiltrados.map ((p) => (
          <TarjetaProducto key={p.id} producto={p} />
        ))}
      </div>
      {/* Renderizacion condicional*/}
      {productosFiltrados.length === 0 && <div className="p-4"> No se encontraron productos</div>}
      

      
    </div>
    
  );
}

export default App;