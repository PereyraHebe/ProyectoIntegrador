import axios from "axios";
import { useEffect, useState } from "react";
import TarjetaProducto from "./assets/componentes/TarjetaProducto";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProductos(res.data.products);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-4">- Proyecto Integrador - Evaluación 1 y 2</h1>
      
      <h2 className="text-xl font-semibold mb-2">Productos de Dummyjson.com</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productos.map((p) => (
          <TarjetaProducto key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
}

export default App;