const form = document.freedom
const submit = document.getElementById

form.addEventListener("submit", function(e){
    e.preventDefault()
    const firstName = form.firstName.value
    const lastName = form.lastName.value
    const age = form.age.value
    const gender = form.gender.value
    const destination = form.destination.value
    const dietRestrictions = []
    const diet = form.diet
    for (i = 0; i <diet.length; i++){
        if(diet[i].checked){
            dietRestrictions.push(diet[i].value)
        }
    }
    
    alert(`Please verify that your information is correct: \n\nFirst Name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \nGender: ${gender} \nDestination: ${destination}`)
})