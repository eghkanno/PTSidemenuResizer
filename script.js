$(function(){

const target = $('aside.sidebar');
const initial_width = 140;


target.funcResizeBox({ 
    minWidth: 10,
    maxWidth: 1000,
    mouseRange: 30,
    isWidthResize:true,
    isHeightResize:false 
})

let observer = new MutationObserver(
    function () {
        target.trigger('sidebar');
    }
);

target.on("sidebar", function(e){
    let offset = target.width()+1;
    $('section.main.project article.main').css({'left': offset});
});

observer.observe(target[0], {
    attributes: true,
    characterData: false,
    childList: true
});

target.width(initial_width);

});

console.log("restyler working!");