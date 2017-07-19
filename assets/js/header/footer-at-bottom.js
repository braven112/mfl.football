// KEEP FOOTER AT BOTTOM OF PAGE
function footerAlign() {
    $('.container-footer').wrap(footer);
  $('footer').css('display', 'block');
  $('footer').css('height', 'auto');
  var footerHeight = $('footer').outerHeight();
  $('body').css('padding-bottom', footerHeight);
  $('footer').css('height', footerHeight);
}
jQuery(document).ready(function(){
  footerAlign();
});
jQuery( window ).resize(function() {
  footerAlign();
});
