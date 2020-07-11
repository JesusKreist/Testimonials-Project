let customerImage = document.getElementById("customer-img");
let customerReview = document.getElementById("customer-text");
let customerName = document.getElementById("customer-name");
let backButton = document.querySelector(".prevBtn");
let nextButton = document.querySelector(".nextBtn");

const testimonial = [{
    name: "Isabelita. L",
    review: "No matter where you go, kimono is the coolest, most happening thing around! Kimono is great. Kimono is great. Buy this now.",
    image: "img/customer-0.jpg"
}, {
    name: "Sabine. F",
        review: "I was amazed at the quality of kimono.",
    image: "img/customer-1.jpg"
}, {
    name: "Gisela N",
        review: "Kimono is awesome! I couldn't have asked for more than this. Kimono has got everything I need. Very easy to use.",
    image: "img/customer-2.jpg"
}, {
    name: "Dusty Q",
        review: "Thank You! Nice work on your kimono.",
    image: "img/customer-3.jpg"
}, {
    name: "Katy H",
        review: "I wish I would have thought of it first. Needless to say we are extremely satisfied with the results.",
    image: "img/customer-4.jpg"
}]

// customerImage.src = "img/customer-0.jpg"
// customerReview.innerHTML = "lalala"
// customerName.innerHTML = "fuck you nigga"

let currentIndex = 0;

let nextTestimonial = () => {
    currentIndex++;
    if (currentIndex > 4) {
        currentIndex = 4;
    }
    if (currentIndex <= 4) {
        customerImage.src = testimonial[currentIndex].image;
        customerReview.innerHTML = testimonial[currentIndex].review;
        customerName.innerHTML = testimonial[currentIndex].name;
    };
};

let previousTestimonial = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 0;
    }
    if (currentIndex >= 0) {
        customerImage.src = testimonial[currentIndex].image;
        customerReview.innerHTML = testimonial[currentIndex].review;
        customerName.innerHTML = testimonial[currentIndex].name;
    };
};

backButton.addEventListener("click", previousTestimonial);
nextButton.addEventListener("click", nextTestimonial);
