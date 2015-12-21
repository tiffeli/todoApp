function addListItem(){
  var text = $("#new-todo").val();
  var list = $("#todo-list").append("<li id=eachitem>"+text+"</li>");
  $("#new-todo").val('What\'s next');
}
$(function() {
    $("#btn-add").keypress("click", addListItem);

});

