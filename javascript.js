$(document).ready(function() { 

	$('#search-btn').on('click', function(event) {

		var userSearch = $("#search-term");
 	 	var recordsNum = $("#number");
		var startYear = $("#start-year");
		var endYear = $("#end-year");

		console.log(userSearch)

		var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		queryUrl += '?' + $.param({

	      'api-key': "c96d79c3d7be46059b5d4873c11b9b35",
	      'sort': "newest",
	      'begin-date': startYear,
	      'end-date': endYear,
	      'q': userSearch,
	      'limit': recordsNum
      });

 	 console.log(queryUrl)

		$.ajax({
			  url: url,
			  method: 'GET',
			}).done(function(result) {
			  console.log(result);

			for (var i = 0; i < result.response.docs.length; i++) {

				var nytDiv = $('<div>');
		        var articles = result.response.docs;
		        var headline = $('<h2>').text(articles.headline.main);
		        var author = $('<h2>').text(articles.byline.original);
		        var date = $('<h2>').text(articles.pub_date);
		        var webURL = $('<h2>').text(articles.web_url);

		        nytDiv.append(headline);

		        nytDiv.append(author);
		        nytDiv.append(date);
		        nytDiv.append(webURL);
		        $('#article-display').prepend(nytDiv);
		 	}

			}).fail(function(err) {
			  throw err;

		
			});

		})

});

/*
headline.main: "title"

byline.original: author

pub_date: "2017-05-31T00:25:22+0000"

section_name : "U.S."

web_url: 


*/