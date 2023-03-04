

// formulario de usuario y contraseña

function login(form){

  const user1  = 'pedro'; pass1 = 123;
  const user2  = 'juan';  pass2 = 234;
  const user3  = 'pablo'; pass3 = 345;


   if(form.u.value== user1){
      if(form.c.value==pass1){

        location="c-pedro.html";
            alert("Bienvenido")
      } else{
            alert("error user our password");
      }
   } 
 
   if(form.u.value==user2){
      if(form.c.value==pass2){

        location="c-juan.html";
        alert("Bienvenido")
      } else{
          alert("error user our password");
      }
    } 

    if(form.u.value==user3){
      if(form.c.value==pass3){
        alert("Bienvenido")
        location="c-pablo.html";

      } else{
          alert("error user our password");
      }
    } 
    

  }


  
	var saldo = 0;
 
	function showContent(id,e) {
		document.getElementById("error").style.display='none';
 
		if (e.checked) {
			document.getElementById(id).style.display='block';
		}else{
			document.getElementById(id).style.display='none';
		}
	}
 
	function deposito() {
		document.getElementById("error").style.display='none';
 
		var valor=parseInt(document.getElementsByName("valor1")[0].value);
		if(!isNaN(valor))
		{
			saldo=saldo+valor;
			document.getElementById("saldo").innerHTML=saldo;
		}
	}
 
	function retiro() {
		document.getElementById("error").style.display='none';
 
		var valor=parseInt(document.getElementsByName("valor2")[0].value);
		if(!isNaN(valor))
		{
			if(valor<=saldo)
			{
				saldo=saldo-valor;
				document.getElementById("saldo").innerHTML=saldo;
			}else{
				document.getElementById("error").innerHTML="La cantidad no puede superar el saldo";
				document.getElementById("error").style.display='block';
			}
		}
	}
 
	
 