$( document ).ready(function() {
    $('.filter-button').on("click", function() {
         var data_type = $(this).attr('data-type');
         var data_value = $(this).attr('data-filter');
         $("[data-type="+data_type+"]").removeClass('active');
         $(this).addClass('active');
         $('.filter').hide().removeClass('active');
         var classesArray = [];
         $('button.active').each(function(){
            var selected_filters = $(this).attr('data-filter');
            classesArray.push(selected_filters);
         })
		 
		 var e = document.getElementById("MySelectMenu");
         var newSrc = e.options[e.selectedIndex].value;
		 classesArray.push(newSrc);
		 
         classes = classesArray.join('.');
         $('.'+classes).show();
     });
     

});
