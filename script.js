const bar_controls = document.querySelector(".bar-controls")
const overlays = document.querySelector(".overlay-all")
const menus = document.querySelector("#home .header-nav .menu .link-contain")

window.addEventListener("load", ()=>{
    document.querySelector("#loadingText").style.display = "none"
})

class controlBnt{
    constructor(elem, overlay, menu){
        this.element = elem;
        this.childList = this.element.children
        this.overlay = overlay
        this.menu = menu
        this.n = 0
        this.change = false
    }
    activeBars(){
        console.log(this.overlay)
        if (this.n==0){
            if(this.change){
                this.childList[0].style.transform = "rotate(0) translate(0,0)"
                this.childList[2].style.transform = "rotate(0) translate(0,0)"
                this.overlay.style.display ="none"
                this.menu.style.transform = "translateX(120%)"
            }
            else{
                this.childList[1].style.width = '0';
                this.overlay.style.display = "block"
                this.menu.style.transform = "translateX(0)"
            }
            this.change = (this.change) ? false : true
            console.log(this.change)
            setTimeout(()=>{
                this.n++;
                this.activeBars()
            }, 400)
        }
        else{
            if (this.change){
                this.childList[0].style.transform = "rotate(45deg) translate(6px,6px)"
                this.childList[2].style.transform = "rotate(-45deg) translate(5px,-4px)"
            }
            else{
                this.childList[1].style.width = '100%';
            }
            this.n = 0
        }
    }
    
    
}
const teste = new controlBnt(bar_controls, overlays, menus)
bar_controls.addEventListener("click", ()=>{
    teste.activeBars();
})
