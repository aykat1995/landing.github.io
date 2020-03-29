$(document).ready(function(){

  $('#btn').on('click', function(){
    $('#modal').addClass('modal_active');
  });

  $('#btn-leave').on('click', function(){
    $('#modal-leave').addClass('modal-leave_active');
  });
  
  $('#close').on('click', function(){
    $('#modal').removeClass('modal_active');
  });

  $('#leave-close').on('click', function(){
    $('#modal-leave').removeClass('modal-leave_active');
  });

});