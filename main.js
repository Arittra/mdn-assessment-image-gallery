const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// storing all the image names in an array
let imgArray = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];

// loop through the array
for (let i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img'); // create new img element
    let imgSrc = `images/${ imgArray[i] }.jpg`; // get the src of the image
    console.log(imgSrc); // see the src's in the console
    
    newImage.setAttribute('src', imgSrc); // set the src attribute to the floating image element
    thumbBar.appendChild(newImage); // append the floating image to it's parent
}

// store all the images inside the .thumb-bar class in a constant
const images = document.querySelectorAll(".thumb-bar img");

// event delegation (set on the parent node of the images)
thumbBar.addEventListener('click', function(e) {
    let selectedElement = e.target; // the selected child

    if (selectedElement.tagName === 'IMG') { // is the the selected child is an image?
        let displaySrc = selectedElement.getAttribute('src'); // get the scoure of the image
        displayedImage.setAttribute('src', displaySrc); // set the source to the displayedImage
    }    
});


/* Wiring up the Darken/Lighten button */
btn.onclick = function() {

    if (overlay.style.backgroundColor === 'rgba(0, 0, 0, 0)') { // is the overlay light?
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.45)'; // make it dark
    } else {
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // else, make it light
    }
};
