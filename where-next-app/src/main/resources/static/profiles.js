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
      var organizer = $("#organizer").val;

      alert(title + " " + summary + " organizer");

      var eventData = {
        "title": title,
        "summary": summary,
        "organizer": organizer
      };

      $.ajax({
        type: "POST",
        url: "", /* TODO */
        data: eventData,
        success: function(data) {
            var message = data.message;
            $("#result").html("<p>" + message + "</p>");
        },
        error: function(exception) {
          alert('Exeption:' + exception);
        }
      }); 

    });

    // Search for events

    $("#btnSearch").click(function() {

      var searchString = $("#txtSearch").val();
      searchString = searchString ? searchString : "";
        var searchData = {
            "searchString": searchString
        };

        $.ajax({
            async: true,
            url: "localhost:8080/api/search",
            type: "GET",
            data: JSON.stringify(searchData),
            contentType : "application/json",
            dataType: 'json',
            timeout : 100000,

            success: function(data) {
              alert("Success!");
              console.log(data);
                var response = data.response;
                alert(response);
                var html = "";
                for (var i = 0; i < response.length; i++) {
                    var title = response[i].title;
                    var summary = response[i].summary;
                    var org = response[i].
                    html += createList(title, summary, "8-22-19", "8-22-19", "NYC, NY");
                }
                $("#result").html(html);

                var numResults = "Found " + data.response.length + " results (max 10)";

                $("#numResults").html(numResults);
            },

            error: function(exception, status, message) {
                alert("Exception!");
                console.log(exception);
                console.log(status);
                console.log(message);

                $("#numResults").html("Found 0 results (max 10)");
            }
        });

        return false;
    });

    $("#alertTest").on("click", function() {
      alert("OKOKOKOKOKOKOKKOK");
    });

  function createSearchResultElement(title, org, summary) {
      return `
      <div class="row">
        <div class="col col-lg">
            <div class="card" style="">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${org}</h6>
                <p class="card-text">${summary}</p>
                
              </div>
            </div>
          </div> 
          </div>`;
    }
});