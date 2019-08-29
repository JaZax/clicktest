const btn = document.getElementById('btn');
const result = document.getElementById('result')

let timenumber = 10;
let clicks = 0;
let clicked = false;

btn.addEventListener('click' , ()=>{

    if(clicked == false){

        btn.value = '10'

        let timecount = setInterval(()=>{ 

            if(timenumber > 0 )
            {

                timenumber--
                btn.value = timenumber
                result.innerHTML = 'CPS: ' + clicks / 10

            }else{
                
                clearInterval(timecount)
                result.innerHTML = 'CPS: <span class="yellow">' + clicks / 10 + "</span>"
            
            }
        
        }, 1000);
    }

    clicked = true;
    clicks++;

})
