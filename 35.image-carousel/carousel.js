let carousel = document.querySelector('.carousel');
let activeIdx = 0;
let totalImages = carousel.querySelectorAll("img").length;

// Locate the images
let gallery = carousel.querySelector(".gallery");

// Buttons to move the image
let prev = document.querySelector('.carousel .prev');
let next = document.querySelector('.carousel .next');

prev.addEventListener('click', () => {
    activeIdx--;
    if(activeIdx < 0){ activeIdx = totalImages - 1 };

    gallery.style.transform = `translateX(${-500 * activeIdx}px)`
});

next.addEventListener('click', () => {
    activeIdx++;
    if(activeIdx >= totalImages){ activeIdx = 0 };

    gallery.style.transform = `translateX(${-500 * activeIdx}px)`
});


// let initCarousels = () => {
//     let carousels = document.querySelectorAll('.carousel');
//     carousels = carousels.map((x) => {
//         return {
//             element: x,
//             activeIdx: 0,
//             totalImages = x.querySelectorAll("img").length,
//         }
//     })

//     carousels.forEach((caro) => {
//         let gallery = caro.querySelector(".gallery");
//         let prev = document.querySelector('.carousel .prev');
//         let next = document.querySelector('.carousel .next');
        
//         prev.addEventListener('click', () => {
//             activeIdx--;
//             if(activeIdx < 0){ activeIdx = totalImages - 1 };
        
//             gallery.style.transform = `translateX(${-500 * activeIdx}px)`
//         });
        
//         next.addEventListener('click', () => {
//             activeIdx++;
//             if(activeIdx >= totalImages){ activeIdx = 0 };
        
//             gallery.style.transform = `translateX(${-500 * activeIdx}px)`
//         });
//     })
// };
