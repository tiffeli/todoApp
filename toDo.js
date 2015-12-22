function addListItem(){
  var text = $("#new-todo").val();
  var list = $("#todo-list").append("<li id=eachitem>"+text+"</li>");
  $("#new-todo").val(' ');
}
$(function() {
    $("#btn-semi-transparent").on("click", addListItem);
    var placeholder = $(this).attr('placeholder');
    $(this).on("mouseover", function(){
      $("placeholder").hide();
    });

});

