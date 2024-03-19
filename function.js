let tab = document.getElementById('demo')
let input1 = document.getElementById('inpu')
let input2 = document.getElementById('inpu2')
function createTable() {

    tab.innerHTML = ''
    
    for (let index = input1.value; index <= input2.value; index++) {
        for(let i = 0; i <= 12; i++){
      tab.innerHTML += `<p> ${index} x ${i} = ${index * i} </p>`
   }

   }
         
        
        
    }
     