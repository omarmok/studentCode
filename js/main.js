jQuery(document).ready(function () {
 
    var monthNames = [ "يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","أغسطس","سبتمبر ","أكتوبر ","نوفمبر ","ديسمبر "];
    var dayNames= ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعه", "السبت"]
 
    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    jQuery('#topnav_Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + '/' + monthNames[newDate.getMonth()] + '/' + newDate.getFullYear());
    
 });


       



        $('.eventslider').slick({
        dots: true,
        infinite: true,
        // vertical: true,
        speed: 500,
        slidesToShow: 1 ,
        slidesToScroll:1,
        autoplay:true,
        rtl:true,
      
        });





 


