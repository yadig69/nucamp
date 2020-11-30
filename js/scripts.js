 $(function() {
     $(".carousel").carousel({
         interval: 2000
     });
     $("#carouselButton").click(function() {
         if ($("#carouselButton").children("i").hasClass("fa-pause")) {
             $(".carousel").carousel("pause");
             $("#carouselButton").children("i").removeClass("fa-pause");
             $("#carouselButton").children("i").addClass("fa-play");
         } else {
             $(".carousel").carousel("cycle");
             $("#carouselButton").children("i").removeClass("fa-play");
             $("#carouselButton").children("i").addClass("fa-pause");
         }
     });
 });

 $('#reserveButton').on('hidden.bs.modal', function(e) {
     $('#reserveButton').modal('show')
 });


 $('#loginModal').on('hidden.bs.modal', function(e) {
     $('#loginModal').modal('show')
 });

 $('#closeModal').on('hidePrevented.bs.modal', function(e) {
     $('#closeModal').modal('hide')
 });

 //  working on getting the login modal to stay hidden