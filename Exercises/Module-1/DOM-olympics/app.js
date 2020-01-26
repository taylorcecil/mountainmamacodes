const h1 = document.createElement('h1')

h1.textContent = 'JavaScript made this! Woohoo.'

document.getElementById('header').appendChild(h1)

h1.className = 'header'

const subTitle = document.createElement('subTitle')

subTitle.innerHTML = '<span class="name">Taylor</span> wrote the JavsScript'

subTitle.className = 'header'

document.getElementById('header').appendChild(subTitle)

const message = document.getElementsByClassName('message')
const messages = document.getElementById('messages')

message[0].textContent = "Hey! How's it going?"
message[1].textContent = "It's going well, how about you?"
message[2].textContent = "Well, well. Thank you."
message[3].textContent = "Great to hear!"

const clear = document.getElementById('clear-button').addEventListener('click', clearConvo)

// function clearConvo(){
//     message[0].textContent = ""
//     message[1].textContent = ""
//     message[2].textContent = ""
//     message[3].textContent = ""
// }

function clearConvo() {
    for(var i=0; i<message.length; i++){
        message[i].textContent = ""
      
        message[i].style.backgroundColor = "white" 
    }
}


