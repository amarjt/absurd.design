// tooltip for membership card
$(".card:last-child span").mouseenter(function () {
    $(".member-disc").css("display", "block");
});

$(".member-disc").mouseleave(function () {
    $(".member-disc").css("display", "none");
});


// top-btn 
$(window).scroll(function () {
    var pos = $(this).scrollTop();

    if (pos > 400) {
        $(".top-btn").fadeIn();
    } else {
        $(".top-btn").fadeOut();
    }
});

$(".top-btn").click(function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    });
});

// scrollNav on mouse scroll

const scroll = {
    scrollPos: [48,
        799,
        1505,
        2116,
        3067,
        4194,
        6109,
        6576,
    ]
}

// console.log(scroll.ids.length);


function activeScrollIndicator(param) {
    $(param).siblings().removeClass("active");
    $(param).addClass("active");
}

// scrollNav on click of ScrollIndicator

$(document).ready(function () {
    $(".scroll-indicators a").click(function (e) {
        e.preventDefault();

        var targetid = $(this).attr('href');
        var offset = $(targetid).offset().top;

        activeScrollIndicator(this);

        $('html,body').animate({
            scrollTop: offset
        });

    });
});

$(window).scroll(function () {

    var currentScrollTop = $(window).scrollTop();

    // check closest scrollPos
    var closest = null;

    $.each(scroll.scrollPos, function () {
        if (closest == null || Math.abs(this - currentScrollTop) < Math.abs(closest - currentScrollTop)) {
            closest = this;
        }
    });

    var absClosest = parseInt(closest);

    var index = scroll.scrollPos.indexOf(absClosest);

    var activeInd = `.scroll-indicators a:nth-child(${index+1})`;

    activeScrollIndicator(activeInd);

});