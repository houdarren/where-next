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
            data: searchData,

            success: function(data) {
              console.log(data);
                var response = data.response;
                alert(response);
                var html = "";
                for (var i = 0; i < response.length; i++) {
                    var title = response[i].title;
                    var summary = response[i].summary;
                    html += createList(title, summary, "8-22-19", "8-22-19", "NYC, NY");
                }
                $("#result").html(html);
            },
            
            error: function(exception) {
                alert("Exception!");
            }
        });

    });

    $("#alertTest").on("click", function() {
      alert("OKOKOKOKOKOKOKKOK")
    });

  function createList(title, desc, tStart, tEnd, address, location) {
      return `<article class="search-result row">
          <div class="col-xs-12 col-sm-12 col-md-3">
                <a href="#" title="Lorem Ipsum" class="thumbnail"
                  ><img src="http://lorempixel.com/250/140/abstract" alt="Lorem ipsum"
                /></a>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-2">
                <ul class="meta-search">
                  <li>
                    <i class="fas fa-calendar-alt"></i>
                    <span>${tStart} - ${tEnd}</span>
                  </li>
                  <li>
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${address}</span>
                  </li>
                </ul>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-7">
                <h3><a href="#" title="">${title}</a></h3>
                <p>
                  ${desc}
                </p>
                <span class="plus"
                  ><a href="#" title="Lorem ipsum"
                    ><i class="fas fa-hand-rock"></i></a
                ></span>
              </div>
              <span class="clearfix border"></span>
            </article> `;
    }
});