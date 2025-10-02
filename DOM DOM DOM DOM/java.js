function alterarMsg(nome){
    
}

let elementoBotao = document.getElementById("btnConfirma")

elementoBotao.addEventListener("click", function(){
    const elemento = document.getElementById("msg")
    const nome = document.getElementById("nome").value
    console.log(nome)
    elemento.innerHTML = `Boa tarde ${nome}`
}) 
