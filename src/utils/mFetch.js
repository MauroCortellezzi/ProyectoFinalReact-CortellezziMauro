let productos = [
    { id: '1' ,categoria: 'PC', name: "HP", stock:50, price: 37, foto:'https://http2.mlstatic.com/D_NQ_NP_954592-MLA52662231444_112022-O.webp', colores:[{nombre:'rojo', clase:''}] },
    { id: '2' ,categoria: 'PC', name: "Apple PC", stock:50, price: 27, foto:'https://i.ebayimg.com/images/g/KoYAAOSw99djNqma/s-l500.jpg' },
    { id: '3' ,categoria: 'PC', name: "Alienware", stock:50, price: 40, foto:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgDfZIc4e6Ub7X8F54XuA_ygmkFHaS0wKHt8_nmIFkdi4aDySFwXEWusgO6-e-ty4yCLY&usqp=CAU' },
    { id: '4' ,categoria: 'IPHONE',  name: "IPHONE 10", stock:50, price: 55, foto:'https://http2.mlstatic.com/D_NQ_NP_605126-MLM51559383638_092022-O.webp' },
    { id: '5' ,categoria: 'IPHONE',  name: "IPHONE 12", stock:50, price: 11, foto:'https://http2.mlstatic.com/D_NQ_NP_687876-MLA54928353971_042023-O.webp' },
    { id: '6' ,categoria: 'TABLET',  name: "LENOVO", stock:50, price: 19, foto:'https://images.fravega.com/f300/bae3680e437fc6f640248370ad086e39.jpg.webp' },
    { id: '7' ,categoria: 'TABLET',  name: "GALAXY", stock:50, price: 2,  foto:'https://http2.mlstatic.com/D_NQ_NP_683670-MLA52231427025_112022-O.jpg' }  
] 


 export const mFetch = (id)  =>{
    return new Promise ((res, rej)=>{
      setTimeout(()=>{
        res(!id ? productos : productos.find(producto => producto.id === id))
      },1000)
    })
  }

