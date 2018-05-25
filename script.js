$(function () {
    const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

    //操作対象の要素が生成済みかを確認する
    let sidebarFound = () => {
        let found = $('aside.sidebar div.sidebar_wrapper').length>0? true:false; 
        return found;
    };

    (async () => {
        for (i = 0; i < 20; i++) {
            await sleep(500);
            if (sidebarFound()) {
                init();
                break;
            }
        }
        if (!sidebarFound()) {
        console.log("Something wrong. Please reload later...");
        }
    })();

    function init() {
        const target = $('aside.sidebar');
        const initial_width = 140;

        target.funcResizeBox({
            minWidth: 10,
            maxWidth: 1000,
            mouseRange: 30,
            isWidthResize: true,
            isHeightResize: false
        })

        let observer = new MutationObserver(
            function () {
                target.trigger('sidebar');
            }
        );

        target.on("sidebar", function (e) {
            let offset = target.width() + 1;
            $('section.main.project article.main').css({ 'left': offset });
        });

        observer.observe(target[0], {
            attributes: true,
            characterData: false,
            childList: true
        });

        target.width(initial_width);

        $('#sidebar_area > aside').css('overflow','visible');//謎のスクロールバーが出現するのを防ぐのに必要

        console.log("side menu resizer working!");
    }

});
