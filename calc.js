const changeMode = () => {
                // let mybody = document.body;
                let mymain = document.getElementById('calculator');
                // let mynav = document.querySelector('nav');


                mymain.classList.toggle('myDark');                
                // mynav.classList.toggle('myDark');
                // mybody.classList.toggle('myDark');
            }


const calc = (opt) => {
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;
    let output = 0;
    if(opt == 'Add'){
        output = `Sum of Number is ${Number(a)+Number(b)}`
    }else{
        output = `Sub of Number is ${Number(a)-Number(b)}`
    }
    document.getElementsByClassName('output')[0].innerText=output
}