$(document).ready(function() { 

	$('#search-btn').on('click', function(event) {

		var userSearch = $("#search-term").val();
 	 	var recordsNum = $("#number").val();
		var startYear = $("#start-year").val();
		var endYear = $("#end-year").val();

		var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		queryUrl += '?' + $.param({

          'q': userSearch,
	      'api-key': "c96d79c3d7be46059b5d4873c11b9b35",
	      'sort': "newest",
	      'begin-date': startYear,
	      'end-date': endYear,
	      'limit': recordsNum
      });

 	 console.log(queryUrl)

		$.ajax({
			  url: queryUrl,
			  method: 'GET',
			}).done(function(result) {
			  console.log(result);

			for (var i = 0; i < result.response.docs.length; i++) {

				var nytDiv = $('<div>');
		        var articles = result.response.docs;
		        var headline = $('<h2>').text(articles[i].headline.main);
		        var author = $('<p>').text(articles[i].byline.original);
		        var date = $('<p>').text("Date: " + articles[i].pub_date);
                var section = $('<p>').text("Section: " + articles[i].section_name);
		        var webURL = $('<a>').text('READ THE ARTICLE');
                webURL.attr('href', articles[i].web_url);

		        nytDiv.append(headline);
		        nytDiv.append(author);
		        nytDiv.append(date);
                nytDiv.append(section);
		        nytDiv.append(webURL);
		        $('#article-display').append(nytDiv);
		 	}

			}).fail(function(err) {
			  throw err;

		
			});

		})

});
