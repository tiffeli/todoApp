function addListItem(){
  var text = $("#new-todo").val();
  var list = $("#todo-list").append('<li id=eachitem>'+text+' <button class="delete"> Delete </button></li>');
  $("#new-todo").val(' ');
}
function deleteItem() {
 $(this).remove();
}

$(function() {
    $("#btn-semi-transparent").on("click", addListItem);
    $(".delete").on("click", deleteItem);
});

