function sin(){
    document.calculator.screen.value= Math.sin(document.calculator.screen.value);
}

function cos(){
    document.calculator.screen.value= Math.cos(document.calculator.screen.value);
}

function tan(){
    document.calculator.screen.value=Math.tan(document.calculator.screen.value);
}

function asin(){
    document.calculator.screen.value=Math.asin(document.calculator.screen.value);
}

function  acos(){
    document.calculator.screen.value=Math.acos(document.calculator.screen.value);
}

function  atan(){
    document.calculator.screen.value=Math.atan(document.calculator.screen.value);
}

function num(value){
    document.calculator.screen.value += value;
}

function equal(){
    document.calculator.screen.value=eval(document.calculator.screen.value);
}

// function close(){
//     document.calculator.screen.value= " ";
// }

function sup(){
    document.calculator.screen.value= Math.pow(document.calculator.screen.value,2);
}

function inverse(){
    document.calculator.screen.value= Math.pow(document.calculator.screen.value,-1);
}

function log(){
    document.calculator.screen.value= Math.log(document.calculator.screen.value);
}

function ln(){
    document.calculator.screen.value= Math.log10(document.calculator.screen.value);
}

function root(){
    document.calculator.screen.value= Math.pow(document.calculator.screen.value,.5);
}

function factorial(){
    let x=document.calculator.screen.value;
    if(x===0 || x===1){
        document.calculator.screen.value=1;
    }
    else{
        for(let i=x-1;i>=1;i--){
            x*=i;
        }
        document.calculator.screen.value=x;
    }
}

function left(){
    let left='(';
    document.calculator.screen.value+=left;
}

function right(){
    let right=')';
    document.calculator.screen.value+=right;
}

function pi(){
    document.calculator.screen.value+=Math.PI;
}

function cl(){
    document.calculator.screen.value="";
}