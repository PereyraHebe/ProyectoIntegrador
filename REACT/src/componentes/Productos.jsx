function Productos() {
    const productos = [
      { nombre: "Notebook", precio: 1200000 },
      { nombre: "Mouse", precio: 50000 },
      { nombre: "Teclado", precio: 80000 },
      { nombre: "Monitor", precio: 300000 },
      { nombre: "Auriculares", precio: 70000 },
    ];

    //Filtro para productos mayores a $100000 (agregue ceros a los precios!)
    
    const productosCaros = productos.filter((producto) => producto.precio > 100000);
    console.log(`Los productos que valen mas de $100000 con : ${productosCaros}`)

    // Usar map para obtener un nuevo array de strings con el formato "Notebook: $1200000"
    
    const productosFormato = productos.map((producto) => `${producto.nombre}: $${producto.precio}`);
    console.log(`Nuevo array: ${productosFormato}`)
    
    // Usar reduce para calcular total de precios
    const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
    console.log(`El precio total de todos los productos es : $ ${precioTotal}`);

    // Combinar filter y map para obtener los nombres de los productos que cuesten menos de 100000, en minúsculas
    const productosBaratos = productos.filter((producto) => producto.precio < 100).map((producto) => producto.nombre.toLowerCase());
    console.log(`Los productos con un precio menor a $100000 son: ${productosBaratos}`);
    
    return (
        <h3> Ejercicio 6: ver resultados en consola, dentro de componente Productos .</h3>
    )
}
      
  
  export default Productos;