let contenedorGrafico1 = document.getElementById('grafica1Container')
let contenedorGrafico2 = document.getElementById('grafica2Container')

const getDataStarWars = async ()=>{    

    try {          

        let response = await fetch(`https://swapi.dev/api/films/`)

        let data = await response.json()

        let arrDatos = data.results

            let tituloPelicula = arrDatos.map((elemento)=>{
                return (elemento.title)
            })
            

            let añoPublicacion = arrDatos.map((elemento)=>{
                return parseInt((elemento.release_date).split("-")[0])                
            })

        // console.log(tituloPelicula)
        // console.log(añoPublicacion)
        
        let objDatos = {tituloPelicula,añoPublicacion}
        
        // console.log(ObjDatos)  

        return objDatos
    }

    catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }

}

const drawGrafic1 =  () => {
   
    getDataStarWars()

    .then (objDatos=>{

        let data = {
            // A labels array that can contain any sort of values
            labels: objDatos.tituloPelicula ,
            // Our series array that contains series objects or in this case series data arrays
            series: [objDatos.añoPublicacion]
          };

          let options = {
            width: 700,
            height: 500
          };
          
          // Create a new line chart object where as first parameter we pass in a selector
          // that is resolving to our chart container element. The Second parameter
          // is the actual data object.
        new Chartist.Line('.ct-chart', data, options);
        
        
    })
    
    

    
   
}

drawGrafic1()















    

//     fetch('https://swapi.dev/api/films/')
//     .then(res=>res.json())

//     .then(data=> {

//         let arrDatos = data.results

//         let tituloPelicula = arrDatos.map((elemento)=>{
//             return (elemento.title)
//         })
        

//         let añoPublicacion = arrDatos.map((elemento)=>{
//             return (elemento.release_date).split("-")[0]
//         })
        
//         let ObjDatos = {tituloPelicula,añoPublicacion}
          
//     })


// })

// dameDatos()


  


