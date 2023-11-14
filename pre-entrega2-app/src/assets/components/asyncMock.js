const products = [
    { id: "1", name: "Wolf Ipa", img: "https://i.ibb.co/q76LKQW/wolf.jpg", price: 2600, category: "cerveza", description: "Cerveza rubia Amarga", stock: 20 },
    { id: "2", name: "Scottish", img: "https://i.ibb.co/9Zcf8Wz/scottish.jpg", price: 2400, category: "cerveza", description: "Una Cerveza Roja", stock: 15 },
    { id: "3", name: "Black Soul Stout", img: "https://i.ibb.co/HDGRPxq/black.jpg", price: 2400, category: "cerveza", description: "Cerveza Negra", stock: 12 },
    { id: "4", name: "Bacon Burger", img: "https://i.ibb.co/DDyHX2w/bacon.jpg", price: 3900, category: "burger", description: "Hamburguesa con Panceta y queso Cheddar", stock: 5 },
    { id: "5", name: "Classic Burger", img: "https://i.ibb.co/L6SpKyx/classic.jpg", price: 3500, category: "burger", description: "Hamburguesa con Tomate y Lechuga ", stock: 8 },
    { id: "6", name: "Cheese Burger", img: "https://i.ibb.co/hm1pwRZ/cheese.jpg", price: 3500, category: "burger", description: "Burger with double cheese cheddar", stock: 10 },
    { id: "7", name: "Fernet con Coca", img: "https://i.ibb.co/SnCKRyg/fernet.jpg", price: 3000, category: "tragos", description: "Fernet Branca con Coca-Cola", stock: 30 },
    { id: "8", name: "Gin Tonic", img: "https://i.ibb.co/dGkXgtD/gin.jpg", price: 2800, category: "trago", description: "Gin Bosque con Tonica", stock: 20 },
    { id: "9", name: "Negroni", img: "https://i.ibb.co/88bxv2w/negroni.jpg", price: 3000, category: "trago", description: "Gin Campari Carpano y Naranja", stock: 20 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };
  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };