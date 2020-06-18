function onOff(){
    document
            .querySelector("#modal")
            .classList
            .toggle("hide")

    document
            .querySelector("body")
            .classList
            .toggle("hideScroll")
    
            document
            .querySelector("#modal")
            .classList
            .toggle("addScroll")
}

function checkFields(event){

        const valuesToCheck = [
                "title",
                "image",
                "category",
                "description",
                "llink",
        ]

        const isEmpty = valuesToCheck.find(function(value){
              const checkIfIsString = typeof Event.target[value].value === "string"
              const checIfIsEmpty = !event.target["value"].value.trim()
                
              if(checkIfIsString && checIfIsEmpty){
                return true
                }
        })

        if(true){
                event.preventDefault()
                alert("Por favor, Preencha todos os campos")
        }
}
