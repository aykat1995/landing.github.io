$(document).ready(function(){

  $('.faq-block_text').on('click', function(){
    if ($('.faq-block_text').hasClass('faq-block_active')) {
      $('.faq-block_text').removeClass('faq-block_active');
    }

    if ($(this).closest(".faq-block").hasClass('faq-block-wrap')) {
      $('.faq-block').removeClass('faq-block-wrap');
    }

    const wrap = $(this).closest(".faq-block");
    wrap.css('flex-wrap', 'wrap');
    
    
    const line = $(this).closest(".faq-block").find(".faq-block_text");
    const add = $(this).closest(".faq-block").find(".faq-block_ans");

    $('.faq-block_ans').not(add).slideUp(400);
    $(this).closest(".faq-block").find(".faq-block_ans").slideToggle(400);

    $('.faq-block_text').not(add).removeClass("faq-block_active");    
    $(this).closest(".faq-block").find(".faq-block_text").addClass("faq-block_active");

});
});