function addListItem(){
  var text = $("#new-todo").val();
  var list = $("#todolist").append('<li class="listed"><input type="checkbox" class="done" /><span id="text">' +
    text+'</span> <button class="delete"> Delete </button><button onclick="updateInput()" class="edit"  >Edit</button></li>');
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
// function edit (node){
//     //1: Call the prompt. node.firstChild.innerHTML gets the value of the listed element (that is now inside a <span>)
//       var newText = prompt("Change this item?",node.secondChild.innerHTML);
//       //2: Modify the value of the first child of "node", that is the <span> tag.
//       node.secondChild.innerHTML = newText;

// }
function updateInput(){
  var updateText = prompt("Change this item?");
  $(this).closest('span').html('<span id="text">'+ updateText + '</span>');
  // document.getElementById("text").innerHTML = updateText; // works but only for first element
  $(this).parent().text(updateText);
  alert(this);
}
// function updateItem(){
//       function focusFunction(){
//         if (this.value === content) {this.value = '';}
// }
//   var content = $(this).text();
//  $(this).html('<input id="update" value=' + content + ' onfocus="focusFunction()" onblur="blurFunction()"/>');
//  var updateInput = document.getElementById("update");

// }
$(document).ready(function() {
    $(document).on('click','#btn-semi-transparent', addListItem);
    $(document).on('click', '.done', checkOff);
    $(document).on('click', '.delete',deleteItem);
    $(document).on('click','.listed',updateItem);
    $(document).on('click', '.edit', updateInput);


  });

  // var listedItem = document.getElementById('new-todo');
  // listedItem.onkeyup = function(event){
  //   if(event.which === 13){
  //     var item = listedItem.value;
  //     if(!item || item === "" || item === " "){
  //       return false;
  //     }
  //     addListItem;
  //   }
  // };
// function handle(e){
    //     if(e.keyCode === 13){
    //         alert("Enter was pressed was presses");
    //     }

    //     return false;
    // }
    //how to get enter word detection to add

