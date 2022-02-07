const $$= document.querySelectorAll.bind(document)
const $= document.querySelector.bind(document)

// start
;(function() {

    active()
    changeImage()
    setInterval(changeColorIcon, 3000)

    // Modal
    showModal()
    hideModal()

    // Gallery
    closeGallery()
    indexImage()
    increaseDecrease()
}) ()

// Active

function active() {

    const headerNavProduct=
        $$('.header__nav--product')
    
    headerNavProduct.forEach((product, i) => {
        product.addEventListener('click', e => {

            $('.header__nav--product.active').classList.remove('active')
            product.classList.add('active')
        })
    })
}

// show Modal
function showModal() {
    const bar= $('.header__main--brand > i')
    bar.addEventListener('click', e => {

        $('.modal').classList.add('show')
    })
}

// hide Modal
function hideModal() {

    const close= $('.modal__nav i')
    close.addEventListener('click', e => {
        $('.modal').classList.remove('show')
    })
}

// change background image

function changeImage() {

    const image= $('.header__background')
    const linkImg=
        [
            "url('./img/bg_header/apple.jpg')",
            "url('./img/bg_header/store.jpg')",
            "url('./img/bg_header/computer.jpg')"
        ]
    
    let i= 0
    
    image.style.backgroundImage= linkImg[i]

    setInterval(() => {
    // change image 
        ++i
        image.style.backgroundImage= linkImg[i]
        
        if(i >= linkImg.length) {
            i= 0
        }

        image.style.backgroundImage= linkImg[i]
    }, 3000)
}

// change color icon each 3000s
function changeColorIcon() {

    const icons= $$('.header__background--modal i')
    for(let i = 0; i < icons.length; ++i) {
        icons[i].style.background= '#fff'
    }

    ++index
    
    if(index > icons.length) // return
        index= 1
    icons[index - 1].style.background= 'var(--primary-color)'
}
let index= 0
changeColorIcon()


// Gallery

    // close Gallery 
function closeGallery() {

    // close Gallery when click icon vs gallery
    
    const nodeCloses= $$('.gallery__product > i, .gallery')

    nodeCloses.forEach(nodeClose => {
        nodeClose.addEventListener('click', e => {

            $('.gallery').classList.remove('show')
        })
    })

    // su kien noi bot
    $('.gallery__product').addEventListener('click', e => {
        e.stopPropagation()
    })
    
}

// index
let id= 0
function indexImage() {

    const imageProducts= $$('.body__hot--product img, .body__flash .col img')

    imageProducts.forEach((imageProduct, i) => {
        imageProduct.addEventListener('click', e => {

            showGallery()

            id = i
            showExacllyImage()
        })
    })
}

    // show gallery when click image
function showGallery() {

    $('.gallery').classList.add('show')
}

    // show exaclly image 
function showExacllyImage() {

    const img= $('.gallery__product--img img')
    img.src= $$('.body__hot--product img, .body__flash .col img')[id].src
}

    // increase vs decrease
function increaseDecrease() {

    let number= 1

    // increase
    function increase() {

        const plus= $('.info__qual--increase i')

        plus.addEventListener('click', e => {
            ++number
            $('.info__qual--number').innerText= number
            total()

        })
    }
    increase()

    // decrease
    function decrease() {
        const subtract= $('.info__qual--decrease i')

        subtract.addEventListener('click', e => {
            --number

            if(number < 0) {
                number = 0
                total()

            }
            $('.info__qual--number').innerText= number
            total()
        })
    }
    decrease()

    function total() {

        $('.info__total--number').innerText=
        parseFloat($('.info__price--number').innerText) * number
    }
}