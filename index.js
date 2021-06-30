const inputs=document.querySelectorAll(".input");

inputs.forEach(input =>{
    input.addEventListener('focus', focusfunc);
    input.addEventListener('blur', blurFunc);
});

function focusfunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    console.log("exit function runs")
    if(this.value == ""){
    parent.classList.remove('focus');
    }
}



