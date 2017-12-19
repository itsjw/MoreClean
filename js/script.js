document.addEventListener('DOMContentLoaded', function () {
  
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    console.log("spy menu")
    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');          
        
      });
    });
  }
})
//oculta nav al hacer scroll
$(document).ready(function (e) {

  //slick
  $('.slider').slick({
    autoplay: false
  });

    var scroll = 116

  $(document).scroll(function (e) {    
    var scrollTop =$(this).scrollTop()
      if( scrollTop > scroll ){
        $('.is-fixed-top').css('transform', 'translateY(-124px)')
        scroll = scrollTop 
      }
      if(scrollTop < scroll){
        $('.is-fixed-top').css('transform', 'translateY(0px)')     
        scroll = scrollTop        
      }
    //console.log(`sTop${$(this).scrollTop()}`)
    //console.log(`scroll:${scroll}`)
    
  })

  $('.input').on('keyup', function () {
    let valorMail = $('#input-email').val()
    //console.log(`mail${valorMail}`)
    let mailOK = caracteresCorreoValido(valorMail,)
  });
  

  fetch("js/listaProductos.json", {
    method:'get'}).then( response => response.json())
      .then( response =>{      
        console.log(response)
        //console.log(lista.PromiseValue)
        for (var key in response.listaProductos) {
          var element = response.listaProductos[key];
          renderProductos(element)
          //$('div').append('TESTE');
        }           
      })
      .catch( err =>{
        console.log(err)
      })    
      
    })
    
    function renderProductos (elemento){
      //console.log(elemento)
      $('#productos').append(`<div class="prod">${elemento}</div>`); 
      //$('#productos').append(elemento)
    }


function caracteresCorreoValido(email, div){
  console.log(email);
  var email = email
  var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

  if (caract.test(email) == false){
      $('#input-email').addClass('is-danger')
      $('.help').show('slow')
      $('.ico-danger-form-mail').show('slow')
      console.log('false')
      return false;
  }else{
    $('#input-email').removeClass('is-danger')
    $('.help').hide('slow')
    $('.ico-danger-form-mail').hide('slow')
    console.log('true')
    
//        $(div).html('');
      return true;
  }
}



//cargado del menu desde el archivo menu.html
   /* $(document).ready(function () {
     $('.loadMenu').hide()
      $.get("menu.html", function (data, textStatus, jqXHR) {
          $('.loadMenu').html(data); // dom element
          console.log("cargado menu")
        },
        "html"
      );    
      $('header').fadeIn('slow')
});*/

//slider
/*
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
*/
    
