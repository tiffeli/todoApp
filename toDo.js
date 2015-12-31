function addListItem(){
  var text = $("#new-todo").val();
  var list = $("#todolist").append('<li><input type="checkbox" class="done" />' +
    text+' <button class="delete"> Delete </button></li>');
  $("#new-todo").val(' ');
}

function deleteItem() {
 $(this).parent().remove();
}

function checkOff() {
  if( $(this).parent().css('textDecoration') === 'line-through'){
      $(this).parent().css('textDecoration', 'none');
  } else {
  $(this).parent().css('textDecoration', 'line-through');
  }
}

$(document).ready(function() {
    $("#btn-semi-transparent").on('click', addListItem);

    $(document).on('click', '.done', checkOff);
    $(document).on('click', '.delete',deleteItem);
  });
// function handle(e){
    //     if(e.keyCode === 13){
    //         alert("Enter was pressed was presses");
    //     }

    //     return false;
    // }
    //how to get enter word detection to add

