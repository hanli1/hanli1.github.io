var fadeWindowValue = 500;
var navBarHeight = 64;

$(document).ready(function() {
	$(".button-collapse").sideNav();
	loadSideBarDynamically();
	$('.scrollspy').scrollSpy();
	$('.parallax').parallax();


	$('#doorlock')[0].click();
	// $("html,body").animate({scrollTop: 0}, 1000);
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 30) {
    // $('.nav-wrapper').velocity({
    // 	backgroundColor: "#000000", 
    // 	backgroundColorAlpha: "1"
    // });
	$('nav').css("background-color", "#4CAF50");
	$('nav').removeClass("z-depth-0");
  } else {

  		// $('.nav-wrapper').velocity({
  		// 	backgroundColorAlpha: "0"
  		// });
  	$('nav').css("background-color", "transparent");
	$('nav').addClass("z-depth-0");
  }
});

//makes all elements including picture on main page load at once
// $(window).on('load', function() {
//     $("#main_container").attr("visibility", "visible");
// });

$(window).on('load', function() {
	$("#cover").fadeOut(500);
});

$('i').click(function(){
    console.log("here");
    var id = this.id;
    if(id === "github-icon")
        window.open("https://github.com/hanli1").focus();
    else if(id === "linkedin-icon")
        window.open("https://linkedin.com/in/hanli3").focus();
    else
        Materialize.toast('Currently Not Linked', 1000, 'rounded')

});

// tab onclick listeners
$('ul#tabs li').click(function() 
{ 
	//setAsActive('#'+this.id);
	//set sidebar activated
	$('#' + this.id + '_sidebar').addClass("active");
	var clickedId = this.id;
	var index = this.id.indexOf("-");
	console.log(index + " " + this.id.substring(0, index));

	var section = $("#" + this.id.substring(0, index));
	// $('html, body').animate({
 //        scrollTop: section.offset().top
 //    }, 2000);
	$('html, body').velocity("scroll",  { duration: 500, offset: section.offset().top - navBarHeight, easing: "ease-out"})
});


/* Handle sidebar clicks, instead of individual ones, it simply gets the id of the tab button
    from the sidebar item class, then sends a click to the button */
$('#sidebar').on('click','li',function(e){
    id = $(this).attr('id');
    $('#'+ id.substr(0, id.length - 8)).click();
    e.preventDefault();
    $('.button-collapse').sideNav('hide');
});


/*generates the sidebar based on the elements in the top tabs
removes the wave effect as sidebar has it built in
adds a class with the id in order to keep highlighting consistant
*/
function loadSideBarDynamically()
{
	$('#tabs').children('li').each(function () {
		sidebarItem = $(this).clone().removeClass("waves-effect").attr('id', $(this).attr('id') + '_sidebar');
		$('#sidebar').append(sidebarItem);
	});

}

function removeActives()
{
	$('#tabs').children('li').each(function () {
		$(this).removeClass("active");
	});
	$('#sidebar').children('li').each(function () {
		$(this).removeClass("active");
	});
}

function setAsActive(id)
{
	removeActives();
	$(id).addClass("active");
	
	

	//method 1
	// $('#main_container').fadeOut('fast', function(){
	// 	//when done fading out, load new html
	// 	$('#main_container').load(fileName, function(){
	// 		//when done with loading, fade it in
	// 		$('#main_container').fadeIn('main_container');
	// 		//let the size readjust
	// 		$("#main_container").css("height","auto");
	// 		//if it is the project tab, click first to load it
	// 		if(fileName === 'projects.html')
	// 		{
	// 			$('#doorlock')[0].click();
	// 		}
	// 	});
	// });
}

$('#send').click(function(){
	launchEmail();
});

function launchEmail()
{
    var subject = $("#subject").val();
    var message = $("#message").val();
    if(subject.trim().length == 0 && message.trim().length == 0){
        Materialize.toast('There is no text', 1000, 'rounded')
//        $("#send").velocity({
//            backgroundColor: "#FF0000"
//        }, {
//            duration: 500,
//            complete: function(elements){
//                    $("#send").velocity("reverse", {
//                    duration: 500,
//                });
//            }
//        });
        return;
    }
	var url = "mailto:dragon1357531@gmail.com?subject=";
	url+= subject.replace(" ", "+");
	url+= "&body="
	url+= message.replace(" ", "+");
	window.open(
		url,
          '_blank' // <- This is what makes it open in a new window.
          );
}