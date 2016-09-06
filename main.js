$("#search-button").click(function(){
  var query = $("#search-input").val();
  queryWikiAPI(query);
});

function queryWikiAPI(query){
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=10&generator=search&origin=*&gsrsearch=" + query, function(data){
    var pages = data.query.pages;
    var index = 1;
    $(".panel-heading").show();
    $(".panel").show();

    if($('#search-result-1:visible').length == 0)
    {
      console.log("test");
      fadeInPanels(pages, index);
    } else {
      $(".panel-body").fadeOut("slow", function(){
        fadeInPanels(pages, index);
      });
    }

  });
}
$("#random-page-button").click(function(){
  openRandomPage();
});

function fadeInPanels(pages, index){
  $.each(pages, function(_, page){
    $("#search-result-" + index).html("<a href='https://en.wikipedia.org/?curid=" + page.pageid +"' target='_blank'>" + page.title + "</a>");
    $(".panel-body").fadeIn("slow");
    index++;
  });
}

function openRandomPage(){
  window.open('https://en.wikipedia.org/?curid=' + Math.floor(Math.random() * 10000), '_blank');
}