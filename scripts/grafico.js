const option1 =  document.getElementById("option1")
const option2 =  document.getElementById("option2")
const option3 =  document.getElementById("option3")
const option4 =  document.getElementById("option4")

const submit = document.getElementById("comprobar")
const next = document.getElementById("buttom-next1")


const valida= (e) => {

    e.preventDefault()

    if (option1.checked) {

        alert("Prueba de nuevo")
        next.style.display= "none"

    }else if(option2.checked) {

        alert("Prueba de nuevo") 
        next.style.display= "none"

    }else if(option3.checked) {
        
        alert("¡¡¡ Has acertado !!!")
        next.style.display= "flex"        


    }else{ 
        alert("Prueba de nuevo")
        next.style.display= "none"
    }

}

submit.addEventListener("click", valida)

