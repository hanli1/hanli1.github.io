//on click listener for side tabs, must have specific class
$('body').on('click', 'a.project-item', function() {
    clearActives();
    activate('#'+this.id);
    //window.scrollTo(0, 0);
});


function clearActives()
{
  $('#project-collection').children('a').each(function () {
    $(this).removeClass("green");
    $(this).removeClass("white-text");
    $(this).addClass("green-text");
  });
}

function activate(name)
{
  $(name).addClass("green");
  $(name).addClass("white-text");

  //strip the # fom the id
  var fileName = '/projects/' + name.substr(1, name.length-1) + '.html';
  // $('#project-display-container').hide().load(fileName).fadeIn(fadeWindowValue);
  $('#project-display-container').load(fileName);
}