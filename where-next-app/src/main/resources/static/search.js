$(document).ready(function() {
  var searchResults = document.getElementById("searchResults");

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function getData() {
    let searchQuery = getUrlParameter("search");

    var settings = {
      async: true,
      crossDomain: true,
      url: `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&api_key=${apiKey}&query=${searchQuery}&append_to_response=person`,
      method: "GET",
      headers: {},
      data: "{}"
    };

    $.ajax(settings).done(function(response) {
      for (var i = 0; i < 10; i++) {
        var title = response.results[i].title;
        var desc = response.results[i].description;
        var tStart = response.results[i].tStart;
        var tEnd = response.results[i].tEnd;
        var address = response.results[i].location;
        createList(title, desc, tStart, tEnd, address, searchResults);
      }
    });
  }

  function createList(title, desc, tStart, tEnd, address, location) {
    var article = document.createElement("article");
    article.classList = "search-result row";
    article.innerHTML = `          <div class="col-xs-12 col-sm-12 col-md-3">
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

    location.appendChild(article);
  }
});