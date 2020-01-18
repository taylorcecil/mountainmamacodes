var form = document.getElementByID("airline-form");
var submit = document.getElementByID(submit);
var query = document.querySelector;

function formAlert(){
    var firstName = document.getElementByID("firstName").value;
    var lastName = document.getElementByID("lastName").value;
    var age = document.getElementByID("age").value;
    var gender = document.getElementByID("gender").value;
    var location = document.getElementByID("travel-location").value;
    var diet = {};

    if (form.elements['vegan'].checked){
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked){
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked){
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

formAlert()
submit.addEventListener("click", formAlert);