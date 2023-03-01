



$(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
       $('#dynamic').addClass('newClass');
    } else {
       $('#dynamic').removeClass('newClass');
    }
});


//shuffle function

window.onload = function () {
   var Shuffle = window.Shuffle;
   var element = document.querySelector('.shuffle-container');
   
   var shuffleInstance = new Shuffle(element, {
     itemSelector: 'li'
   }); 
     
   
     $('.shuffle-filter li').on('click',function(e){
       e.preventDefault();
       $('.shuffle-filter li').removeClass('selected');
       $(this).addClass('selected'); 
       var keyword = $(this).attr('data-target');
       shuffleInstance.filter(keyword);
     });
     
   }




  

   const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});

