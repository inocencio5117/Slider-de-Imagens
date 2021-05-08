const img = document.querySelectorAll('.img-container img');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

document.addEventListener('click', e => {
    const el = e.target

    // next button
    if (el.classList.contains('next')) {

        currentSlide++;
        if (currentSlide > 2) {
            
            // reseting
            currentSlide = 0;

            img[2].classList.remove('active')
            img[0].classList.add('active')

            dots[2].classList.remove('active')
            dots[0].classList.add('active')
        }
        else {
            
            img[currentSlide-1].classList.toggle('active')
            img[currentSlide].classList.toggle('active')

            dots[currentSlide-1].classList.toggle('active')
            dots[currentSlide].classList.toggle('active')

        }
    }

    // previous button
    if (el.classList.contains('prev')) {

        currentSlide--;
        if (currentSlide < 0) {
            
            // reseting 
            currentSlide = 2;

            img[0].classList.remove('active')
            img[2].classList.add('active')

            dots[0].classList.remove('active')
            dots[2].classList.add('active')
        }
        else {
            
            img[currentSlide+1].classList.toggle('active')
            img[currentSlide].classList.toggle('active')

            dots[currentSlide+1].classList.toggle('active')
            dots[currentSlide].classList.toggle('active')

        }
    }    

    
    // clicks on dots
    if (el.classList.contains('dot')) {
        
        if (el === dots[0]) {
            currentSlide = 0

            img[1].classList.remove('active')
            img[2].classList.remove('active')
            img[0].classList.add('active')

            dots[1].classList.remove('active')
            dots[2].classList.remove('active')
            dots[currentSlide].classList.add('active')

        }

        if (el === dots[1]) {
            currentSlide = 1

            img[0].classList.remove('active')
            img[2].classList.remove('active')
            img[1].classList.add('active')

            dots[0].classList.remove('active')
            dots[2].classList.remove('active')
            dots[currentSlide].classList.add('active')
            
        }

        if (el === dots[2]) {
            currentSlide = 2

            img[0].classList.remove('active')
            img[1].classList.remove('active')
            img[2].classList.add('active')

            dots[0].classList.remove('active')
            dots[1].classList.remove('active')
            dots[currentSlide].classList.add('active')
            
        }
    }
})
