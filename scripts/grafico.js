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
        console.log(objDatos)
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


  


