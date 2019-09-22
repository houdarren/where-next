$(document).ready(function() {
    function newOrganizer() {
      // json.parse to output a json object
      var firstName = document.getElementById("FirstName").value;
      var lastName = document.getElementById("LastName").value;
      var email = document.getElementById("Email").value;
      var text = `{"fName": "${firstName}","lName": "${lastName}","email": "${email}"}`;
      var user = JSON.parse(text);
      //   console.log(user);
      //   alert(user);
      console.log(text);
      alert(text);
      window.location.replace(
        "file:///C:/Users/Lydia/projects/wherenow/newEvent.html"
      );
    }

    // create html elements with json info

    function newEvent() {
      // json.parse to output a json object
      var title = document.getElementById("Title").value;
      var org = document.getElementById("Organization").value;
      var description = document.getElementById("Description").value;
      var tStart = document.getElementById("TimeStart").value;
      var tEnd = document.getElementById("TimeEnd").value;
      var location = document.getElementById("Location").value;
      var web = document.getElementById("Website").value;
      var obj = `{"title": "${title}","org": "${org}","desc": "${description}","tStart": "${tStart}","tEnd": "${tEnd}","location": "${location}","web": "${web}"}`;
      var user = JSON.parse(obj);
      console.log(user);
      alert(user);
      // window.location.replace(
      //   "file:///C:/Users/Lydia/projects/wherenow/newEvent.html"
      // );
    }

    // Submit new event

    $('#submitEvent').on('click', function() {

      var title = $("#title").val();
      var summary = $("#summary").val();

      var eventData = {
        "title": title,
        "summary": summary,
        "organizer": "none"
      };

      $.ajax({
        type: "POST",
        url: "", /* TODO */
        data: eventData,
        success: function(data) {
            var message = data.message;
            $("#result").html("<p>" + message + "</p>")
        },
        error: function(exception) {
          alert('Exeption:' + exception);
        }
      }); 

    });

    // Search for events

    $("#searchEvent").on("click", function() {

        var searchData = {
            "searchString": $("#searchBar").val()
        };

        $.ajax({
            url: "", /* TODO */
            type: "GET",
            data: searchData,
            success: function(data) {
                var response = data.response;
                var html = "";
                for (var i = 0; i < response.length; i++) {
                    var title = response[i].title;
                    var summary = response[i].summary;
                    html += "<p class='event'>";
                    html += title + " ";
                    html += summary;
                    html += "</p>";
                }
                $("#result").html(html)
            },
            error: function(exception) {
                alert("Exception!");
            }
        });

    })

    $("#alertTest").on("click", function() {
      alert("OKOKOKOKOKOKOKKOK")
    });

});