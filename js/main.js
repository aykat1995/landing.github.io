$(document).ready(function(){

  $('.faq-block_text').on('click', function(){
    if ($(this).hasClass('faq-block_active')) {
      $(this).removeClass('faq-block_active');
    }

    const line = $(this).closest(".faq-block").find(".faq-block_text");
    const add = $(this).closest(".faq-block").find(".faq-block_ans");
    $('.faq-block_ans').not(add).slideUp(400);
    $('.faq-block_text').not(add).removeClass("faq-block_active");
    $(this).closest(".faq-block").find(".faq-block_ans").slideToggle(400);
    $(this).closest(".faq-block").find(".faq-block_text").addClass("faq-block_active");

});
});