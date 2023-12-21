const pic1 = document.querySelector(".pic1")
const pic2 = document.querySelector(".pic2")
const pic3 = document.querySelector(".pic3")
const pic4 = document.querySelector(".pic4")
const pic5 = document.querySelector(".pic5")
const pic6 = document.querySelector(".pic6")

const presents = [
    "https://target.scene7.com/is/image/Target/GUEST_13205106-a2d3-4355-9a9a-4f534db3f89a?wid=1200&hei=1200&qlt=80&fmt=webp",
    "https://i.ebayimg.com/images/g/P5sAAOSwRd5lHPBx/s-l1600.jpg",
    "https://i.ebayimg.com/images/g/O~kAAOSw-BVjcJig/s-l1600.jpg",
    "https://target.scene7.com/is/image/Target/GUEST_553dbd46-1451-4d8b-8177-957d3f5bf855?wid=1200&hei=1200&qlt=80&fmt=webp",
    "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/9a4c2a2b3a2078f11a613221e20756e1.jpg?imageView2/2/w/800/q/70",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81qV9vVn-RL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
]

function present(num){
    if(num == 0){
        pic1.src = presents[0];
    }
    else if(num == 1){
        pic2.src = presents[1];
    }    
    else if(num == 2){
        pic3.src = presents[2];
    }    
    else if(num == 3){
        pic4.src = presents[3];
    }    
    else if(num == 4){
        pic5.src = presents[4];
    }    
    else if(num == 5){
        pic6.src = presents[5];
    }
}