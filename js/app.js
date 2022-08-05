$(document).ready(function(){
    // console.log('hi');

    // Start Header Section
    //Start Banner Section

    $('.carousel').carousel({
        interval:1000
    })

    //End Banner Section

    // End Header Section

    // start info section
    $(window).scroll(function(){
        let getscrollpoint = $(this).scrollTop();
        // console.log(getscrollpoint);
        
        if(getscrollpoint >= 220){
            $('.infotexts').addClass("fromlefts");
            $('.infopics').addClass("fromrights");
        }else{
            $('.infotexts').removeClass("fromlefts");
            $('.infopics').removeClass("fromrights");
        }
    });
    // End info section

    //Start Premises Section

    //Start lightslider
    $('#lightslider').lightSlider({
        // auto:true,   //auto:true;ko ma use chin yin .play() use ml
        loop:true,
        item:4,       
        slideMove:1,
        speed:600,
    }).play();
    // End lightslider
    //End Premises Section
        
    // Start Pricing Section

    $(window).scroll(function(){
        let getscroll = $(this).scrollTop();
        // console.log(getscroll);

        if(getscroll >= 2450){
            $(".cardones").addClass("movelefts");
            $(".cardtwos").addClass("movebottoms");
            $(".cardthrees").addClass("moverights");
        }else{
            $(".cardones").removeClass("movelefts");
            $(".cardtwos").removeClass("movebottoms");
            $(".cardthrees").removeClass("moverights");
        }
    });

    //End Pricing Section

    // Start Join Us Section
    $('#accordion').accordion();
    // End Join Us Section

    // Start Footer Section
    $('#getyear').text(new Date().getUTCFullYear());
    
    // End Footer Section

    // Start Progress 
    $(window).scroll(function(){
        var getprogress = $("#progresses"); 
        var getprogressval = $("#progressvalues");
        var getscrolltop = $(this).scrollTop();
        // console.log(getscrolltop);

// ----------------------------------------------------------------
    // By Jquery

        // // st * 100 / (pj height - cvheight)
    
        // var getscrollheight = $(document).height();
        // console.log(getscrollheight);
        // var getclientheight = $(window).height();
        // console.log(getclientheight);
         
        // var calcheight = getscrollheight - getclientheight;
        // var getfinalheight = Math.round(getscrolltop * 100 / calcheight)

        // getprogressval.text(`${getfinalheight}%`)

        // getprogress.css({
        //     "background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
        // })
// ----------------------------------------------------------------


    });
    // End Progress


});