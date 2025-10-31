$('#btn-enviar').click(
      function(){
        if($("#correo").val().trim() == "") {
          alert("Tu email no puede estar vacio");
          $("#correo").focus();
          return 0;
        } else if(!$("#correo")[0].checkValidity()) {
          alert("Escribe un email valido");
          $("#correo").focus();
          return 0;
        }

          document.getElementById("#contactanos").submit();
      }
    )
