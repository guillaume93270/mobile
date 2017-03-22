
$('li').click(function(){

  $(this).addClass('active')
       .siblings()
       .removeClass('active');

});
$(window).scroll(function() {
var theta = $(window).scrollTop() / 10 % Math.PI;
$('.layer-3').css({ transform: 'rotate(' + theta + 'rad)' });
$('#rightgear').css({ transform: 'rotate(-' + theta + 'rad)' });
});
