$(function () {
  
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  //enviar correo

  $('#enviar_correo').click(function (){
    alert("El correo fue enviado")
  });

  $('h3').dblclick(function (){
    $("h3").css("color", "red");
  })
  
});


