let slider = tns({
    container : ".my-slider",
    "slideBy" : "1",
    "speed" : "400",
    "nav" : false,
    autoplay : true,
    controls: false,
    autoplayButtonOutput: false,
    responsive: {
        1600: {
            items : 4
        },
        1024: {
            items : 3
        },
        768: {
            items : 2
        },
        480: {
            items : 1
        }
    }
});