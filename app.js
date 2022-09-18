// Simulador de compra de productos para limpieza de autos.

// Declaro mi constructor Producto
class Producto {
  constructor(id, nombre, precio, img, cantidad) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img;
    this.cantidad = cantidad;
  }
}
// Declaro mi "base de datos" de productos en el array stock
const stock = [];
stock.push(new Producto(1, "Shampoo Meguiars NXT Generation Car Wash (1.89 L.)", 7600, "../assets/img/shampoo_nxt.jpg",10));
stock.push(new Producto(2, "Shampoo Mothers California Gold Car Wash (1.89 L.)", 9500, "../assets/img/shampoo_california_gold.jpg", 8));
stock.push(new Producto(3, "Shampoo Sonax Xtreme wash & Dry (1 L.)", 6000, "../assets/img/shampoo_dry_xtreme.png",5));
stock.push(new Producto(4, "Shampoo 3D Pink Car Soap (4 L.)", 6400, "../assets/img/shampoo_pink_car_soap.jpg", 10));
stock.push(new Producto(5, "Cera Mothers California Gold Synthetic Paste Wax (311 gr.)",6500,"../assets/img/cera_california_gold.gif",15));
stock.push(new Producto(6, "Cera rápida Sonax High Speed Wax (500 mL.)", 6500, "../assets/img/cera_high_speed_wax.png", 20));
stock.push(new Producto(7, "Cera Meguiars NXT Generation Tech Wax (311 gr.)", 9000, "../assets/img/cera_nxt_wax_paste.jpg", 4));
stock.push(new Producto(8, "Cera rápida 3M Quick Wax (473 mL.)", 3800, "../assets/img/cera_quick_wax.jpg",20));
stock.push(new Producto(9, "Cepillo 3M para llantas y fundas", 1000, "../assets/img/CELLYF1_500x.webp",20));
stock.push(new Producto(10, "Cepillo 3M duro para alfombras", 1500, "../assets/img/CEPDALF_500x.webp",15));
stock.push(new Producto(12, "Cepillo 3M para pasaruedas", 3000, "../assets/img/CPAS1_500x.webp",20));
stock.push(new Producto(13, "Guante de lavado premium", 3800, "../assets/img/guante_lavadol.jpg",10));
stock.push(new Producto(14, "Microfibra Waffle de secado (60x40 cm.)", 2500, "../assets/img/microfibra-abc-waffle.jpg",15));
stock.push(new Producto(15, "Microfibra amarilla gold pelo corto (40x40 cm.)", 1000, "../assets/img/microfibra_lavado.jpg",30));
stock.push(new Producto(16, "Microfibra amarilla pulido (40x40 cm.)", 1400, "../assets/img/microfibra_pl_pc.jpg",20));


// DOM
// Declaro una función para mostrar los productos de mi array stock
let mostrarProductos = (productos) =>{
// Me ubico en la sección productos con ID = seccion_productos para mostrar mis productos
  const contenedorProductos = document.getElementById("seccion_productos")
// Recorro el array para ir creando las tarjetas (nodos) en el DOM  
  productos.forEach (producto => {
// Creo los DIVs Tarjetas con todas sus clases y propiedades    
    const tarjeta = document.createElement("tarjeta");   
    tarjeta.innerHTML += `<div class="tarjetas text-center position-relative">
                            <h5 class="product__card__titulo card-title">${producto.nombre}</h5>
                            <p class="product__card__precio card-text">Precio: $${producto.precio}</p>
                            <img class="" src=${producto.img} alt="img_producto">
                            <p class="product__card__cantidad card-text">En stock: ${producto.cantidad}</p>
                            <button id="button${producto.id}" class="btn btn-primary btn-lg">Agregar al carrito</button>
                          </div>`
//  Añado las tarjetas (nodos hijos) dentro del nodo padre seccion_productos                  
    contenedorProductos.appendChild(tarjeta)
  })
};
// Llamo a la función mostrarProductos con el array stock como parámetro
mostrarProductos(stock)




