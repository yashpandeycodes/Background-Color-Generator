
        const form=document.querySelector(`form`);
        form.addEventListener(`submit`,function(event){
            event.preventDefault();

            const height=parseInt(document.querySelector(`#height`).value);
            const weight=parseInt(document.querySelector(`#weight`).value);
            const result=document.querySelector(`#result`);
            const BWG=document.querySelector(`#BWG`);

            if(height<0||isNaN(height)||height===0)
            result.innerHTML=`Please enter appropriate height as it is ${height}`;
           else if(weight<0||isNaN(weight)||weight===0){
            result.innerHTML=`Please enter appropriate weight as it is ${weight}`;
           }
           else{
            const bmi=parseInt(((weight*10000)/(height*height)).toFixed(2));
            result.innerHTML=`<div>${bmi}</div>`;
            if(bmi<18.6)
             BWG.innerHTML="Under Weight";
           
           else if(bmi>24.9)
           BWG.innerHTML="Over Weight";
        else{
            BWG.innerHTML="Normal";
        }
    }
        })
    