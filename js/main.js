$(document).ready(function(){
    // header nav 풀다운효과
    let navMenu=false
    $('#header_btm_in li').mouseenter(function(){
        if(navMenu==false){
            navMenu=true
            $('#header_booking').css({display: 'none'})
            $('#header').addClass('on')
            $('#header_bottom nav').addClass('on')
            $('#header_btm_in a').addClass('on')
            $('#header_bottom .nav_menu').stop().animate({height: '200px'},500)
        }
    })

    $('#header_bottom').mouseleave(function(){
        if(navMenu==true){
            navMenu=false
            $('#header_booking').css({display: 'flex'})
            $('#header').removeClass('on')
            $('#header_bottom nav').removeClass('on')
            $('#header_btm_in a').removeClass('on')
            $('#header_bottom .nav_menu').stop().animate({height: '0px'}, 300)
        }
    })






















    // 메인이미지가 timer함수에 의해 자동으로 움직임
    let mainImgCurrent=0;
    $('#main .img_btn li').eq(0).addClass('on')

    mainImgTimer(); 
    function mainImgTimer(){
        setIntervalMainImg=setInterval(() => {
            n=mainImgCurrent+1;

            if(n==7){
                n=0
            };

            move(n);
        }, 2500)};

    function move(i){
        if(i==mainImgCurrent){
            return
        }
        var currentMainImg=$('#main_img_box div').eq(mainImgCurrent);
        var nextMainImg=$('#main_img_box div').eq(i);

        currentMainImg.css({left: '0%'}).animate({left: '-100%'})
        nextMainImg.css({left: '100%'}).animate({left: '0%'})

        $('#main .img_btn li').removeClass('on');
        $('#main .img_btn li').eq(i).addClass('on');

        mainImgCurrent=i;
    };


    // 메인이미지 버튼에 마우스올리면 인터벌 함수 멈춤
    $('#main .img_btn').on({
        mouseenter: function(){
            clearInterval(setIntervalMainImg)
        },
        mouseleave: function(){
            mainImgTimer()
        }
    });

    // 메인이미지 버튼 클릭시 해당이미지로 이동
    $('#main .img_btn li').click(function(){
        var imgBtnIndex=$(this).index();
        
        move(imgBtnIndex)
    })











    // special offer, dining 버튼 클릭시 해당 div 나타남
    // 상태값을 부여해서 같은 버튼 클릭시에는 동작하지 않게함
    let listBtnIndex=0
    $('#special_offer .list_btn li').eq(0).addClass('click')
    $('#special_offer .list_btn li').click(function(){
        let listBtn=$(this).index()
        if(listBtnIndex==listBtn){
            return
        }else{
            $('#special_offer .list_btn li').removeClass('click')
            $(this).addClass('click')
            $('#special_offer .img_box').css({display: 'none'})
            $('#special_offer .img_box').eq(listBtn).stop().css({display: 'block', opacity: '0'}).animate({opacity: '1'},1000)
            listBtnIndex=listBtn
        }
    })

    let listBtnIndexDining=0
    $('#dining .list_btn li').eq(0).addClass('click')
    $('#dining .list_btn li').click(function(){
        let listBtnDining=$(this).index()
        if(listBtnIndexDining==listBtnDining){
            return
        }else{
            $('#dining .list_btn li').removeClass('click')
            $(this).addClass('click')
            $('#dining .img_box').css({display: 'none'})
            $('#dining .img_box').eq(listBtnDining).stop().css({display: 'block', opacity: '0'}).animate({opacity: '1'},1000)
            listBtnIndexDining=listBtnDining
        }
    })










    // rooms 버튼 클릭시 해당 div 박스 출력
    $('#rooms_in .right_box ul li a').eq(0).addClass('on')
    $('#rooms_in .right_box ul li').click(function(e){
        e.preventDefault();
        $('#rooms_in .right_box ul li a').removeClass('on')

        let roomsBtnIndex=$(this).index();
        $('#rooms_in .left_box>div').css({display: 'none'})
        
        $('#rooms_in .left_box>div').eq(roomsBtnIndex).css({display: 'flex', opacity:'0'}).animate({opacity: '1'},1000)
        $(this).find('a').addClass('on')
    })




});