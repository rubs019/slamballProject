/**
 * Created by MaximeVion on 09/02/2018.
 */
$(document).ready(function(){
  $('a.scroll').on('click', function(evt){
    evt.preventDefault();
    // enregistre la valeur de l'attribut  href dans la variable target
    var target = $(this).attr('href');
    /* le sélecteur $(html, body) permet de corriger un bug sur chrome
     et safari (webkit) */
    $('html, body')
    // on arrête toutes les animations en cours
      .stop()
      .animate({scrollTop: $(target).offset().top}, 1000 );

  });
});
