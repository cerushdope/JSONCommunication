$(document).ready(main);

function main(){
  $("#add-button").click(addUser);
  $("#get-button").click(getUsers);
}

/*
Gets values from input bars, parses them into Json format, then stringifies it
and sends the string to server using Ajax.
*/
function addUser(){
  console.log("Adding");
  let name = $("#name").val();
  let surname = $("#surname").val();
  let email = $("#email").val();

  $("#name").val('');
  $("#surname").val('');
  $("#email").val('');


  let userJson = {"name" : name, "surname" : surname, "email" : email};
  let user = JSON.stringify(userJson);

  $.ajax({
    url: "add.php",
    method: "POST",
    data: {
      user : user
    },
    success(response){
      alert(response);
    }
  });
}

/*
Sends request to php which (with Ajax) will respond with all the users in JSon
format, then parses it, adds some styling and appends to the page.
*/
function getUsers(){
  $.ajax({
    url: "get.php",
    method: "GET",
    success(response){
      let users = JSON.parse(response);

      var output = '';
      for (var i in users){
        output = output +
          '<div class = "user">' +
          '<ul>' +
          '<li> ' + users[i].id + '</li>' +
          '<li> ' + users[i].name + '</li>' +
          '<li> ' + users[i].surname + '</li>' +
          '<li> ' + users[i].email + '</li>' +
          '</ul>' +
          '</div>';
      }

      $("#users").html(output);
    }
  });
}
