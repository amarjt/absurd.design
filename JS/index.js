$(document).ready(function () {
    // tooltip for membership card

    $(".card:last-child span").mouseenter(function () {
        $(".member-disc").css("display", "block");
    });

    $(".member-disc").mouseleave(function () {
        $(".member-disc").css("display", "none");
    });


    // top-btn ~ onClick go to top of page

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
        // scrollPos: [48, 799, 1505, 2116, 3067, 4194, 6109, 6576],
        scrollPos: [
            parseInt($("#Surrealist").offset().top),
            parseInt($("#connect").offset().top),
            parseInt($("#story").offset().top),
            parseInt($("#mycarousel").offset().top),
            parseInt($("#imgCards").offset().top),
            parseInt($("#download").offset().top),
            parseInt($("#email-form").offset().top),
            parseInt($("#footer").offset().top),
        ],
        id: [
            "#Surrealist",
            "#connect",
            "#story",
            "#mycarousel",
            "#imgCards",
            "#download",
            "#email-form",
            "#footer",
        ],
    }

    function activeScrollIndicator(param) {
        $(param).siblings().removeClass("active");
        $(param).addClass("active");
    }

    // // if ($(".scroll-indicators a").data("clicked")) {
    // console.log("true");

    // scrollNav on click of ScrollIndicator

    $(".scroll-indicators a").click(function (e) {
        // $(this).click(function (e) {
        e.preventDefault();

        var targetid = $(this).attr('href');
        var offset = $(targetid).offset().top;

        activeScrollIndicator(this);

        $('html,body').animate({
            scrollTop: offset
        });

    });

    // } else {

    // scrollNav on scrolling of page

    $(window).scroll(function () {

        var currentScrollTop = $(window).scrollTop();
        console.log(`CurrentScrollTop: ${currentScrollTop}`);


        // check closest scrollPos
        var closest = null;

        $.each(scroll.scrollPos, function () {
            if (closest == null || Math.abs(this - currentScrollTop) < Math.abs(closest - currentScrollTop)) {
                closest = this;
            }
        });

        // $.each(scroll.scrollPos, function () {
        //     if ((this < (currentScrollTop + 50)) && ((currentScrollTop - 50) < this)) {
        //         closest = this;
        //         console.log("false");
        //     } else if (closest == null || Math.abs(this - currentScrollTop) < Math.abs(closest - currentScrollTop)) {
        //         closest = this;
        //         console.log("true");
        //     }
        // });

        var absClosest = parseInt(closest);

        console.log(`AbsClosest: ${absClosest}`);

        var index = scroll.scrollPos.indexOf(absClosest);

        // console.log(scroll.scrollPos[index]);

        var activeId = `.scroll-indicators a:nth-child(${index+1})`;

        console.log(`ActiveId: ${scroll.id[index]}`);

        activeScrollIndicator(activeId);

    });
    // }

    var viewportWidth = $(window).width();

    if (viewportWidth >= 320) {

    }
});