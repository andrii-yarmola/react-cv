export default (function scrollPlugin() {
    let globalPerspectiveBox;
    let winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    const api = {
        setPerspective: function() {
            if (globalPerspectiveBox) {

                let clientRect = globalPerspectiveBox.getBoundingClientRect();
                let yPerspective = 100 * (winHeight / 2  - clientRect.top) / clientRect.height;

                globalPerspectiveBox.style.perspectiveOrigin = '50% ' + yPerspective + '%';
            }
        },
        resizeHandler: function() {
            winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            api.setPerspective();
        },
        loadHandler: function() {
            api.resizeHandler();
        },
        attachEvents: function() {
            globalPerspectiveBox = document.querySelector('.global-perspective');
            if (globalPerspectiveBox) {
                window.addEventListener('scroll', this.setPerspective);
                window.addEventListener('resize', this.resizeHandler);
                window.addEventListener('load',   this.loadHandler);
            }
        },
        destroy: function() {
            window.removeEventListener('scroll', this.setPerspective);
            window.removeEventListener('resize', this.resizeHandler);
            window.removeEventListener('load',   this.loadHandler);
        }
    }

    return api;
})();

// export default function scrollPlugin() {
//     var globalPerspectiveBox = document.querySelector('.global-perspective');
//     var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
//     function setPerspective() {
//         if (globalPerspectiveBox) {
            
//             var clientRect = globalPerspectiveBox.getBoundingClientRect(),
//                 yPerspective = 100 * (winHeight / 2  - clientRect.top) / clientRect.height;

//             globalPerspectiveBox.style.perspectiveOrigin = '50% ' + yPerspective + '%';
//         }
//     }

//     function resizeHandler() {
//         winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
//         setPerspective();
//     }

//     function loadHandler() {
//         resizeHandler();
//     }
        
//     window.removeEventListener('scroll', setPerspective);
//     window.removeEventListener('resize', resizeHandler);
//     window.removeEventListener('load',   loadHandler);
//     if (globalPerspectiveBox) {
//         window.addEventListener('scroll', setPerspective);
//         window.addEventListener('resize', resizeHandler);
//         window.addEventListener('load',   loadHandler);
//     }
// };

