// Efecto al desplegar lenguajes en menú de navegación

$('.dropdown').on('show.bs.dropdown',function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(100);
});

$('.dropdown').on('hide.bs.dropdown',function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(0);
});

// Popover Minijuegos en desarrollo
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


// Sección Historia
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  center:true,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    800: {
      items: 3
    },
  }
})
