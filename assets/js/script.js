/*
Sintáxis
$ (function)){
  //metodos jquery
});
*/

/*
$(function(){
  $("a").click(function(event){
    alert(this.hash);

  });
});

// sirve para probar que esté funcionando el método hash, 
mostrará una ventana con el id linkeado
*/

/*
El siguiente código sirve para que el sroll
avance a 800 seg
// además "$('[data-toggle="popover"]')
.popover()"
sirve para agregar los popovers (ventanas 
  emergentes)
*/

$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });
  $('[data-toggle="popover"]').popover();
});