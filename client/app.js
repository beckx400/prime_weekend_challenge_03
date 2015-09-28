/**
 * Created by Dave on 9/26/15.
 */
$(document).ready(function(){
    $.ajax({
        url:"/epsilon"
    }).done(function(response){
        var students = response.epsilon;
        var counter = 0;
        for(var i = 0; i < students.length; i++) {
            var $appendMessage = "<div class='slide'><div class='container'><div class='row'><h2 class='name'>" + students[i].name + "</h2><ul class='student-info'><li class='head'>Description</li><li class='description'>" + students[i].description + "</li><li class='head'>Shoutout</li><li class='shoutout'>" + students[i].shoutout + "</li></div></div></div>";
            console.log($appendMessage);
            $(".appendHere").append($appendMessage);
            $(".counter").html("<p class='current-counter'>0 / 19</p>");
        };

        $('.arrow-next').on('click', function() {
            var currentSlide = $('.active-slide');
            var nextSlide = currentSlide.next();

            counter++;

            if(counter > 19){
                counter = 0;
            }

            if(nextSlide.length === 0) {
                nextSlide = $('.slide').first();
            }

            $(currentSlide).fadeOut(300).removeClass('active-slide');
            $(nextSlide).fadeIn(300).addClass('active-slide');

            $(".counter").html("<p class='current-counter'>" + counter + " / 19</p>");
        });

        $('.arrow-prev').click(function() {
            var currentSlide = $('.active-slide');
            var prevSlide = currentSlide.prev();

            counter--;

            if(counter <  0){
                counter = 19;
            }

            if(prevSlide.length === 0) {
                prevSlide = $('.slide').last();
            }

            currentSlide.fadeOut(300).removeClass('active-slide');
            prevSlide.fadeIn(300).addClass('active-slide');

            $(".counter").html("<p class='current-counter'>" + counter + " / 19</p>");
        });
    });


});