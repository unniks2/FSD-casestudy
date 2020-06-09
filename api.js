
$(document).ready(function(){
  $.getJSON("https://jsonplaceholder.typicode.com/todos", function (data){
  var employee_data='';
 $.each(data,function(key,value){
employee_data += '<tr>';
employee_data += '<td>' +value.userId+ '</td>';
employee_data += '<td>' +value.id+ '</td>';
employee_data += '<td>' +value.title+ '</td>';
employee_data += '<td>' +value.completed+ '</td>';



  }
  );
  $('#work_table').append(employee_data);
  console.log(employee_data);
  
});
 });

 
