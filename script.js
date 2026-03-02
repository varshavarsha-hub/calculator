
const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');
let userinp = '';
buttons.forEach(button=>{
    button.addEventListener('click',function(e){
        const buttonvalue = e.target.textContent;
        if(buttonvalue>=0 && buttonvalue<=9){
            userinp+=buttonvalue;
            display.value=userinp;
        }
        else if (['+','-','*','/','%','(',')'].includes(buttonvalue)){
            userinp+=buttonvalue;
            display.value=userinp;
        }
        else if (buttonvalue ==  'AC'){
            userinp='';
            display.value='0';
        }
        else if(buttonvalue == '='){
            try{
                userinp=eval(userinp);
                display.value=userinp;
            }
            catch(error){
                display.value='error';
                userinp='';
            }
        }
    });
});