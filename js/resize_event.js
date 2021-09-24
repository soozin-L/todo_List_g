

const body = document.body;

const BIG_SCREEN = "bigScreen";
const MIDIUM_SCREEN = "midiumScreen";
const SMALL_SCREEN = "smallScreen";

function width(){
    const resizeWidth = window.innerWidth;
   
    if(resizeWidth>1000){
        body.classList.add(BIG_SCREEN);
        body.classList.remove(MIDIUM_SCREEN )

    }else if(resizeWidth<=999 && resizeWidth>=740){
        body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
        body.classList.add(MIDIUM_SCREEN )

    }else{
        body.classList.remove(MIDIUM_SCREEN);
        body.classList.add(SMALL_SCREEN)
    }

}

window.addEventListener("resize", width)