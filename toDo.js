function addListItem(){
  var text = $("#new-todo").val();
  var list = $("#todolist").append('<li class="listed"><input type="checkbox" class="done" />' +
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
  // $(this).parent().toggle();
}

function updateItem(){
      function focusFunction(){
        if (this.value === content) {this.value = '';}
}
  var content = $(this).text();
 $(this).html('<input id="update" value=' + content + ' onfocus="focusFunction()" onblur="blurFunction()"/>');
 var updateInput = document.getElementById("update");

}
$(document).ready(function() {
  var listedItem = document.getElementById('new-todo');
  listedItem.onkeyup = function(event){
    if(event.which === 13){
      var item = listedItem.value;
      if(!item || item === "" || item === " "){
        return false;
      }
      addListItem;
    }
  };
    $("#btn-semi-transparent").on('click', addListItem);
// $('.done').on
    $(document).on('click', '.done', checkOff);
    $(document).on('click', '.delete',deleteItem);
    $(document).on('click','.listed',updateItem);
    updateInput.focus();

  });
// function handle(e){
    //     if(e.keyCode === 13){
    //         alert("Enter was pressed was presses");
    //     }

    //     return false;
    // }
    //how to get enter word detection to add

