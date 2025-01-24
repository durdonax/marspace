let id = document.getElementById('id')
let password = document.getElementById('password')
let eyes = document.getElementById('eye')
let btn  = document.getElementById('btn')



eyes.addEventListener("click", () => {
    if(password.type == "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
});
function isDisabled(){
    if( id.value  & password.value){
        btn.disabled = false;
        btn.style.backgroundColor = "orange"
        btn.style.color = "white";
    }else{
        btn.disabled = true;
        btn.style.backgroundColor = "#F69E86"
        btn.style.color = "black";
    }
}
id.addEventListener("input", ()=>{
    isDisabled();
});
password.addEventListener("input", ()=>{
    isDisabled()
})