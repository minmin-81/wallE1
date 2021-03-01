function scrollHorizontal(e) {
    var wheelDelta = e.originalEvent.wheelDelta;
    

    if(wheelDelta > 0){

        console.log("up");

        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
        
        

    }else{

    console.log("down");

        $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

    }

    let scrollLeft = $(window).scrollLeft();

    if(scrollLeft<=2300){
        $('.wrap_bottom_text p').text('scroll !');
    }

    if(scrollLeft>2300){
        $('.wrap_bottom_text p').text('trailer');
    }



    if(scrollLeft>5300){
        $('.wrap_bottom_text p').text('introduction');
    }

    if(scrollLeft>7300){
        $('.wrap_bottom_text p').text('characters');
    }

    if(scrollLeft>10000){
        $('.wrap_bottom_text p').text('gallery');
    }

    if(scrollLeft>12500){
        $('.wrap_bottom_mo').css({'display':'none'});
        $('.wrap_bottom_text p').css({'display':'none'});
    }
    else{
        $('.wrap_bottom_mo').css({'display':'inline'});
        $('.wrap_bottom_text p').css({'display':'inline'});
    }

   
}


$(document).ready(function(){

    $('header').snowfall({
        flakeCount:15,
        maxSpeed:-1,
        round:true,
        maxSize:10,
        minSize:5,
        image:'images/header/main_light_blue.png'
    })

    $('header').snowfall({
        flakeCount:15,
        maxSpeed:-1,
        round:true,
        maxSize:10,
        minSize:5,
        image:'images/header/main_light_yellow.png'
    })

    $('header').snowfall({
        flakeCount:15,
        maxSpeed:-2,
        round:true,
        maxSize:10,
        minSize:5,
        image:'images/header/main_light_red.png'
    })

    // header 별 떠다니기

    $('.character_text_scrollbox').mouseover(function(){
        $('html,body').off('scroll touchmove mousewheel');
    })
    
    $('.character_text_scrollbox').mouseout(function(){
        $('html,body').on('scroll touchmove mousewheel', scrollHorizontal);
    })

     // 캐릭터 설명박스 위에서 스크롤 멈추기
    $("html,body").on('mousewheel', scrollHorizontal); //마우스휠 가로

    let audio = new Audio('define_dancing.mp4');

    let music = 0 ;
    $('.header_music_bt').click(function(){
        if( music == 0) {
            audio.play();
            music = 1 ;
            $('.header_equalizer').attr({'src':'images/header/equalizer.gif'});
            $(this).text('MUSIC OFF')
        }
        else {
            audio.pause();
            music = 0;
            $('.header_equalizer').attr({'src':'images/header/equalizer.png'});
            $(this).text('MUSIC ON')
        }
        
    });// 이퀄라이저 동작

    

    $('.header_navi_bt').click(function(){
        $('.header_navi_menu').stop().slideToggle()
    })

    
    $('.header_navi_menu>li:nth-child(1)').click(function(){
        $('html,body').animate({scrollLeft:$('header').offset().left},500) 
    })

    $('.header_navi_menu>li:nth-child(2)').click(function(){
        $('html,body').animate({scrollLeft:3500},500) 
    })

    $('.header_navi_menu>li:nth-child(3)').click(function(){
        $('html,body').animate({scrollLeft:6700},500) 
    })

    $('.header_navi_menu>li:nth-child(4)').click(function(){
        $('html,body').animate({scrollLeft:$('.character').offset().left},500) 
    })

    $('.header_navi_menu>li:nth-child(5)').click(function(){
        $('html,body').animate({scrollLeft:$('.gallery').offset().left},500) 
    })

    $('.header_navi_menu>li:nth-child(6)').click(function(){
        $('html,body').animate({scrollLeft:$('.credit').offset().left+1200},500) 
    })
    // navi

    $('.wrap_bottom_text').animate({opacity:0.1},1000,function(){
        $('.wrap_bottom_text').animate({opacity:0.9},1000,function a(){
            $('.wrap_bottom_text').animate({opacity:0.1},1000,function(){
                $('.wrap_bottom_text').animate({opacity:0.9},1000,a)
            })
        })
    }) 
    

    $('.wrap_bottom_mo').animate({'left':'10vw'},1000,function mo(){
        $('.wrap_bottom_mo').animate({'left':'0'},1000,function(){
            $('.wrap_bottom_mo').animate({'left':'10vw'},1000,mo)
        })
    })

    // mo motion

    

    //

    $('.trailer_cloud1').animate({'opacity':'0.7'},4000,function a(){
    $('.trailer_cloud1').animate({'opacity':'1'},4000,function(){
    $('.trailer_cloud1').animate({'opacity':'0.7'},4000,a)
    })
   })

    
    $('.trailer_ship').animate({'top':'6vw'},3000,function b(){
        $('.trailer_ship').animate({'top':'7vw'},3000,function(){
            $('.trailer_ship').animate({'top':'6vw'},3000,b)
        })
    })

    let trailer_circle = 0;
    setInterval(function(){
        trailer_circle = trailer_circle + 0.1;
        $('.trailer_circle1').css({'transform':'rotate('+trailer_circle+'deg)'})
        $('.trailer_circle3').css({'transform':'rotate('+trailer_circle+'deg)'})
    },30)
    setInterval(function(){
        trailer_circle = trailer_circle + 0.05;
        $('.trailer_circle2').css({'transform':'rotate(-'+trailer_circle+'deg)'})
    },30)


    // trailer

    $('.intro_subtitle_button').click(function(){
        $('.intro_subtitle_menu').stop().slideToggle()
    })

    $('.intro_subtitle_menu li:nth-child(1)').click(function(){ 
        $('.desc_text').css({'top':'0'});
        $('.intro_subtitle').text('STEP 1');
        $(this).css({'background-color': 'rgba(0,0,0,0.5)'});
        $(this).siblings('li').css({'background-color':'transparent'});

        $('.intro_desc_img').attr('src','images/intro/intro_text_img1.jpeg');
        
        $('.desc_text p').text('WALL•E is set in the far future where humans have left Earth on a giant ship called the Axiom because of all the garbage pile-up. The only known inhabits now are an adorable robot named WALL•E, who must keep up the mess and his cockroach friend Hal. However, all that changes when WALL•E meets a robot named EVE and falls in love with her. Soon the two robots are heading into space and onto the Axiom on a mission that could bring humankind back to Earth. The year is 2805 A.D. The Earth is a barren wasteland covered in what are literally mountains of trash, suffering from numerous sandstorms and torrential downpours. Over 700 years ago, the mega-conglomerate corporation Buy n Large (BnL) assumed control of the planets entire economy, including the government, and humanity spiralled into a state of mass consumerism, quickly covering the planet in building-sized quantities of trash. In the year 2105, BnL CEO Shelby Forthright sponsored a five-year exodus from Earth into space aboard a fleet of BnL starliners, the most prominent of them being the Axiom, BnLs largest starliner - 40 miles long and 10 miles wide. It is taking a luxury cruise while countless WALL•E (Waste Allocation Load Lifter Earth-Class) units were left behind to compress the trash into small cubes with which they used to build colossal towers to be incinerated by huge city block wide-sized incinerators as part of the proposed "Operation Cleanup". They were to then initiate "Operation Recolonize", returning to Earth after five years, which was believed to be enough time to clean the planet. This plan failed, however, and as Earth was deemed too toxic to re-inhabit, BnL had all the WALL•E and incinerator units shut down, but somehow failed to turn off one.')
    })

    $('.intro_subtitle_menu li:nth-child(2)').click(function(){
        $('.desc_text').css({'top':0});
        $('.intro_subtitle').text('STEP 2');
        $(this).css({'background-color': 'rgba(0,0,0,0.5)'});
        $(this).siblings('li').css({'background-color':'transparent'});

        $('.intro_desc_img').attr('src','images/intro/intro_text_img2.png');
        
        $('.desc_text p').text('WALL•E is Pixars ninth animated feature film. The beginnings of WALL•E started in the summer of 1994 as a production of Toy Story was wrapping up. John Lasseter, Pete Docter, Joe Ranft, and Andrew Stanton began bouncing ideas around for new movies, and out of this planning came A Bugs Life, Monsters, Inc., Finding Nemo, and WALL•E. Stantons idea started as a question: "What if mankind evacuated Earth and forgot to turn off the last remaining robot?" After Stanton explained his idea, Docter did additional work on it for a couple of months in 1995 but decided to move ahead with Monsters, Inc. as he was unsure of telling a love story. Stanton continued to play with the story, including during the production of Finding Nemo. Stanton was attracted to making a movie with robots, as it combined 2 elements he loved - the space movie genre and giving life to inanimate objects. Once Finding Nemo was complete, he felt they had the physics worked out where they could move ahead with the development on WALL•E.')
    })

    $('.intro_subtitle_menu li:nth-child(3)').click(function(){
        $('.desc_text').css({'top':0});
        $('.intro_subtitle').text('STEP 3');
        $(this).css({'background-color': 'rgba(0,0,0,0.5)'});
        $(this).siblings('li').css({'background-color':'transparent'});

        $('.intro_desc_img').attr('src','images/intro/intro_text_img3.jpeg');

        $('.desc_text p').text('The design of WALL•E came from Luxo, Jr. and a pair of binoculars that Stanton was playing with at an A baseball game. He noticed that he could demonstrate emotions such as happiness or sadness by just moving the binoculars, or the eyes, up or down - that it wasnt necessary to have other parts of the face like a nose or mouth. One of the key design elements of WALL•E was that it should be a machine first and a character second. The Pixar team, although exceptionally gifted with creating lifelike facial expressions, were concerned about the audiences response to a film that would have no spoken dialog for the first 30 minutes. Andrew Stanton and the producers encouraged the animators to watch early silent films from the 1920s and 30s to become more proficient in expressing emotion without the use of spoken dialogue. The music also helped convey much of the emotion during this part of the movie.')
    })
    



    $('.intro_playbt').click(function(){
        $('.desc_text').animate({'top':'-100%'},25000,'linear')
    })


    $('.intro_pausebt').click(function(){
        $('.desc_text').stop();
    })
  
    

    // introduction


    let slide_num = 0;
    $('.character_right_bt').click(function(){
        slide_num = slide_num - 100 ;
        if(slide_num < -300){slide_num = 0}
        $('.character_slide').animate({'left': slide_num +'%'})
    })

    $('.character_left_bt').click(function(){
        slide_num = slide_num + 100 ;
        if(slide_num > 0){slide_num = -300}
            $('.character_slide').animate({'left': slide_num +'%'})
        
    })

    $('.walle_lang_korean').click(function(){
        $('.walle_text_scrollbox').text('WALL • E (Waste Allocation Load Lifter Earth-Class)는 지구에 마지막으로 남겨진 로봇으로 쓰레기를 하나하나 큐브로 압축해 지구를 청소하도록 프로그래밍되어 있습니다. 그러나 700 년이 지나는 동안 그는 결함인지 진화인지 모를 변화를 하게 되었는데 , 성격을 가지게 되었다는 것입니다. 그는 매우 호기심이 많고 호기심이 많으며 조금은 외롭습니다.')
    })
    $('.walle_lang_english').click(function(){
        $('.walle_text_scrollbox').text('WALL•E (Waste Allocation Load Lifter Earth-Class) is the last robot left on Earth, programmed to clean up the planet, one trash cube at a time. However, after 700 years, he’s developed one little glitch—a personality. He’s extremely curious, highly inquisitive, and a little lonely.')
    })

    $('.eve_lang_korean').click(function(){
        $('.eve_text_scrollbox').text('EVE (Extra-Terrestrial Vegetation Evaluator)는 세련된 최첨단 탐사 로봇입니다. 그녀는 빠르게 날아다닐 수 있으며 강력한 화력의 레이저 건을 가지고 있습니다. 엑시움 (수천 명의 실향민을 수용하는 거대한 호화 모선)의 선장이 “프로브 원”이라고도 부르는 이브는 공개되지 않은 탐사 임무를 수행하기 위해 지구로 보내진 로봇 중 하나입니다.')
    })
    $('.eve_lang_english').click(function(){
        $('.eve_text_scrollbox').text('EVE (Extra-Terrestrial Vegetation Evaluator) is a sleek, state-of-the-art probe-droid. She’s fast, she flies, and she’s equipped with a laser gun. EVE, also called Probe One by the captain of the Axiom (the enormous luxury mother ship which houses thousands of displaced humans), is one of a fleet of similar robots sent to Earth on an undisclosed scanning mission.')
    })

    $('.captain_lang_korean').click(function(){
        $('.captain_text_scrollbox').text('Captain은 엑시움의 현재 사령관입니다. WALL • E와 같은 일상에 갇힌 캡틴은 소위 삶의 권태기에서 휴식을 갈망합니다. 그의 유일한 임무는 단순히 자동 조종 장치인 오토에게 명령하여 선박의 상태를 확인하고 또 재확인하는 것입니다. 이브가 오랫동안 기다려온 발견을 하게 됐다는 사실을 알게되자 그는 상상할 수 없었던 용감한 지도자가 되려는 내면의 소명을 발견하고, 인류를위한 새로운 길을 계획합니다.')
    })
    $('.captain_lang_english').click(function(){
        $('.captain_text_scrollbox').text('Captain is the current commander of the Axiom. Trapped in a routine, like WALL•E, the captain longs for a break in the tiresome cycle of his so-called life. His uneventful duties are simply checking and rechecking the ship’s status with Auto, the autopilot. When he is informed of a long-awaited discovery by one of the probe-droids, he discovers his inner calling to become the courageous leader he never could have imagined and plots a new course for humanity.')
    })

    $('.auto_lang_korean').click(function(){
        $('.auto_text_scrollbox').text('Auto는 700 년 동안 우주에서 배를 조종 해 온 엑시움의 자동 조종 장치입니다. 배의 스티어링 휠 형태로 세심하게 프로그래밍 된 로봇인 오토의 매너는 차갑고 기계적이며 얼핏 보면 선장에게 충실한 것처럼 보입니다. 그러나 오토는 아무에게도 알려지지 않은 숨겨진 명령을 오랜 시간 수행하고 있습니다. 오토는 엑시움 주민들의 의견과 상관없이, 어떤 대가를 치르더라도 비밀 명령의 실행을 최우선으로 여깁니다.')
    })
    $('.auto_lang_english').click(function(){
        $('.auto_text_scrollbox').text('Auto is the Axiom’s autopilot, who has piloted the ship through all of its 700 years in space. A carefully programmed robot in the form of the ship’s steering wheel, Auto’s manner is cold, mechanical, and seemingly dutiful to the captain. Unknown to all the Axiom crew, a hidden mandate exists in Auto’s programming. Auto is determined to execute these secret orders at any cost, regardless of the consequences for the inhabitants of the Axiom.')
    })


    // gallery 시작


    $('.gallery_box li').click(function(){
        $(this).children('p').fadeIn();
        $('.gallery_notice').hide()
    })


    // credit 시작

    $('.credit_desc').mouseover(function(){
            $('.credit_desc').animate({'top':'-100%'},25000,'linear');
    });

    $('.credit_desc').mouseout(function(){
        $('.credit_desc').stop();
    })


    $('.credit_eve_light1').delay(1000).animate({'opacity':0},10,function light(){
        $('.credit_eve_light1').delay(1000).animate({'opacity':1},10,function(){
            $('.credit_eve_light1').delay(1000).animate({'opacity':0},10,light)
        })
    })

    $('.credit_eve_light2').delay(1000).animate({'opacity':1},10,function light(){
        $('.credit_eve_light2').delay(1000).animate({'opacity':0},10,function(){
            $('.credit_eve_light2').delay(1000).animate({'opacity':1},10,light)
        })
    })

    $('.credit_eve_light3').delay(1000).animate({'opacity':0},10,function light(){
        $('.credit_eve_light3').delay(1000).animate({'opacity':1},10,function(){
            $('.credit_eve_light3').delay(1000).animate({'opacity':0},10,light)
        })
    })

    $('.credit_eve_light4').delay(1000).animate({'opacity':1},10,function light(){
        $('.credit_eve_light4').delay(1000).animate({'opacity':0},10,function(){
            $('.credit_eve_light4').delay(1000).animate({'opacity':1},10,light)
        })
    })

    $('.credit_eve_light5').delay(1000).animate({'opacity':0},10,function light(){
        $('.credit_eve_light5').delay(1000).animate({'opacity':1},10,function(){
            $('.credit_eve_light5').delay(1000).animate({'opacity':0},10,light)
        })
    })

    $('.credit_eve_light6').delay(1000).animate({'opacity':1},10,function light(){
        $('.credit_eve_light6').delay(1000).animate({'opacity':0},10,function(){
            $('.credit_eve_light6').delay(1000).animate({'opacity':1},10,light)
        })
    })

    $('.credit_eve_light7').delay(1000).animate({'opacity':0},10,function light(){
        $('.credit_eve_light7').delay(1000).animate({'opacity':1},10,function(){
            $('.credit_eve_light7').delay(1000).animate({'opacity':0},10,light)
        })
    })

    $('.credit_eve_light8').delay(1000).animate({'opacity':1},10,function light(){
        $('.credit_eve_light8').delay(1000).animate({'opacity':0},10,function(){
            $('.credit_eve_light8').delay(1000).animate({'opacity':1},10,light)
        })
    })

    $('.credit_eve_light9').delay(1000).animate({'opacity':0},10,function light(){
        $('.credit_eve_light9').delay(1000).animate({'opacity':1},10,function(){
            $('.credit_eve_light9').delay(1000).animate({'opacity':0},10,light)
        })
    })

    $('.credit_eve').animate({'top':'52%'},2000,function evemove(){
        $('.credit_eve').animate({'top':'48%'},2000,function(){
            $('.credit_eve').animate({'top':'52%'},2000,evemove)
        })
    })


    $('.credit_navi_box').click(function(){
        $(this).css({'outline':'none'});
        $('body,html').animate({scrollLeft:0});
        
    })

    $('.credit_navi_image').animate({'right':'5vw'},500,function frontbt(){
        $('.credit_navi_image').animate({'right':'0'},500,function(){
            $('.credit_navi_image').animate({'right':'5vw'},500,frontbt)
        })
    })
});