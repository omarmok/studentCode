jQuery(document).ready(function () {
 
    var monthNames = [ "يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","أغسطس","سبتمبر ","أكتوبر ","نوفمبر ","ديسمبر "];
    var dayNames= ["الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعه", "السبت"]
 
    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    jQuery('#topnav_Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + '/' + monthNames[newDate.getMonth()] + '/' + newDate.getFullYear());
    
 });


       



        $('.statistic__counter').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4 ,
        slidesToScroll:1,
        autoplay:true,
        rtl:true,
        // draggable:false,
        responsive: [
        {
        breakpoint: 1024,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
        }
        },
        {
        breakpoint: 600,
        settings: {
        slidesToShow:1,
        slidesToScroll:1,
            infinite: true,
        dots: false
        }
        },
        {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
        }
        }

        ]
        });





 


