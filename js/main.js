
// Put everything inside of a function - that way we can
// recalculate the the squares again when we want to (ie, resize)

var calculatesquares= function ()
{
//Set the width
var w = $('.galimg').width();

//Set the height
var h =	$('.galimg').height(w).height();


//Loop. For each of the img do something
$('.galimg img').each(function () {

	var imgw = $(this).width();
	var imgh = $(this).height();

//Apply the appropriate class portrait/landscape

	if ( imgw > imgh ) {
		$(this).addClass('landscape');

// What % did the image shrink by?
		var shrink = $(this).height()/imgh;

	//Figure out how many px are overhanging, divide by 2	
		var halfcrop = (imgw * shrink - w)/ 2;
		$(this).css('left', -halfcrop +'px');
}
	else {
		$(this).addClass('portrait');

// What % did the image shrink by?
		var shrink = $(this).width()/imgw;

 // Figure out how mant px are overhanging, divide by 2
		var halfcrop = (imgh * shrink - h) / 2;
 // Apply half the overhang as a negative number to the top		
		$(this).css('top', -halfcrop + 'px');

}
});
};
// Call once
calculatesquares();

// Runs again when I resize the browser
$(window).on('resize', calculatesquares);

////////////////////////////////////
$('.galimg').on('mouseover', function() {

  // if there is at least one element that HAS .hovercaption
  // within THIS galimg - then just show it, don't recreate it
  if ( $(this).has('.hovercaption').length > 0 ) {
    $(this).find('.hovercaption').show();
  }

  // Otherwise, create a new hovercaption <div> and show it
  else {
    $('<div>').addClass('hovercaption').text("WHATEVER").prependTo( this ).show();
  }

});

$('.galimg').on('mouseout', function() {
  $(this).find('.hovercaption').hide();
});




