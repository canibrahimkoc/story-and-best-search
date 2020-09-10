    var arama = '1'
    var aramalar = [
        {"Baslik":"Çok Satanlar","Link":"/cok-satanlar/"},
        {"Baslik":"Cep Mendili","Link":"/test-test/"},
        {"Baslik":"Trender","Link":"/test-test/"},
        {"Baslik":"Adidas","Link":"/test-test/"},
        {"Baslik":"Nike","Link":"/test-test/"},
        {"Baslik":"Mavi","Link":"/test-test/"},
        {"Baslik":"Yeni Gelenler","Link":"/test-test/"},
    ];
    var hikaye = '1'
    var hikayeler = [
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
        {"Baslik":"Test Baslik","Resim":"https://i.hizliresim.com/kXoUBg.jpg","Link":"/test-test/"},
    ];
    var searchs = new Array();
    searchs = aramalar;
    var stories = new Array();
    stories = hikayeler;
    $(document).ready(function(){
        if (arama==1) {
            $("#search .wrap .inner").after('<div class="top-search-area">');
            $.each(aramalar, function (index, speedSearch) {
                var searchItem = $('<a href="'+speedSearch.Link+'" class="best-serach">'+speedSearch.Baslik+'</a>');
                $(".top-search-area").append(searchItem);
            });
        }
        if (hikaye==1) {
            var html = $('<div class="storyMainCont" id="story">'+
                '<div class="slideLeftBTN">' +
                '<img class="slideLeftBTNimg" src="https://i.hizliresim.com/RHimJB.png" >' +
                '</div>' +
                '<div class="hiza">' +
                '<div class="story-area">' +
                '</div>' +
                '</div>' +
                '<div class="slideRightBTN">' +
                '<img class="slideRightBTNimg" src="https://i.hizliresim.com/5p35f3.png" >' +
                '</div>' +
                '</div>');
            $("#homepageSlider").after(html);
            $(".slideRightBTN").on("click", function() {
                var aaRight = document.querySelector("#story > div.hiza");
                aaRight.scrollLeft += 1000;
                $('.slideLeftBTNimg').css({
                    "opacity": "1",
                    "transitionDuration": "0.5s"
                })
                var strSyi = document.querySelectorAll(".story-area > a");
                var totalWidth = strSyi.length * 100;
                var getScrollWidth = totalWidth - 1000;

                setTimeout(function() {
                    if (aaRight.scrollLeft == getScrollWidth) {
                        $('.slideRightBTNimg').css({
                            "opacity": "0",
                            "transitionDuration": "0.5s"
                        })
                    }
                }, 650);
            });
            $(".slideLeftBTN").on("click", function() {
                var aaLeft = document.querySelector("#story > div.hiza");
                aaLeft.scrollLeft -= 1000;
                $('.slideRightBTNimg').css({
                    "opacity": "1",
                    "transitionDuration": "0.5s"
                })
                setTimeout(function() {
                    if (aaLeft.scrollLeft == 0) {
                        $('.slideLeftBTNimg').css({
                            "opacity": "0",
                            "transitionDuration": "0.5s"
                        })
                    }
                }, 650);
            });
            $.each(hikayeler, function (index, stoyBanner) {
                 var storyItem = $('<a href="'+stoyBanner.Link+'" class="linkstr"><div class="storyRing"><div class="colorRing"><img class="storyimg" src="'+stoyBanner.Resim+'" alt="'+stoyBanner.Baslik+'"/></div><div class="storyText">'+stoyBanner.Baslik+'</div></div></a>');
                    $(".story-area").append(storyItem);
            });
        }
    });
