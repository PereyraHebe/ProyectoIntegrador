import React from "react";

const TarjetaProducto = ({ producto }) => {
  return (
    <div className="border p-4 m-2 rounded-lg shadow-md bg-green-100">
      <h2 className="text-lg font-bold">{producto.title} </h2>
      <p className="text-gray-600">{producto.description}</p>
      <p className="text-green-600 font-semibold"> ${producto.price}</p>
    </div>
  );
};

export default TarjetaProducto;