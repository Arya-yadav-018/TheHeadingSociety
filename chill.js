const slides = document.querySelectorAll(".slide");

var counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goprev = () => {
    if(counter===0){
        console.log("this is counter in decrement",counter)

        return;
    }
    else{
        counter=counter-1;
        slideimage()
    }
};

const gonext = () => {
    if(counter<37){

            console.log("this is counter in increment",counter)
            counter=counter+1;
            slideimage()
    }
    else{
        return;
    }

};

const slideimage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}