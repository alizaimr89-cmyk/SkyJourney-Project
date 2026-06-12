// IMAGE SLIDER

let images = [

    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    
    "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
    
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    
    ];
    
    let current = 0;
    
    function nextSlide(){
    
    current++;
    
    if(current >= images.length){
    current = 0;
    }
    
    document.getElementById("sliderImage").src =
    images[current];
    
    }
    
    function prevSlide(){
    
    current--;
    
    if(current < 0){
    current = images.length - 1;
    }
    
    document.getElementById("sliderImage").src =
    images[current];
    
    }
    
    setInterval(nextSlide,3000);
    
    // MODAL
    
    const offerBtn =
    document.getElementById("offerBtn");
    
    const offerModal =
    document.getElementById("offerModal");
    
    const closeOffer =
    document.querySelector(".closeOffer");
    
    offerBtn.onclick = function(){
    
        offerModal.style.display = "flex";
    
    }
    
    closeOffer.onclick = function(){
    
        offerModal.style.display = "none";
    
    }
    
    window.onclick = function(e){
    
        if(e.target == offerModal){
    
            offerModal.style.display = "none";
    
        }
    
    }
    const claimBtn =
document.querySelector(".claim-btn");

claimBtn.onclick = function(){

    offerModal.style.display = "none";

}
claimBtn.onclick = function(){

    alert("🎉 Offer Claimed Successfully!");

    offerModal.style.display = "none";

}
    
    // FORM VALIDATION
    
    document.getElementById("bookingForm")
    .addEventListener("submit",function(e){
    
    e.preventDefault();
    
    let name =
    document.getElementById("name").value;
    
    let email =
    document.getElementById("email").value;
    
    let phone =
    document.getElementById("phone").value;
    
    let password =
    document.getElementById("password").value;
    
    let message =
    document.getElementById("message");
    
    let nameRegex =
    /^[A-Za-z ]{3,30}$/;
    
    let emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    let phoneRegex =
    /^[0-9]{11}$/;
    
    let passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    
    if(!nameRegex.test(name)){
    message.innerHTML =
    "❌ Invalid Name";
    return;
    }
    
    if(!emailRegex.test(email)){
    message.innerHTML =
    "❌ Invalid Email";
    return;
    }
    
    if(!phoneRegex.test(phone)){
    message.innerHTML =
    "❌ Phone must contain 11 digits";
    return;
    }
    
    if(!passwordRegex.test(password)){
    message.innerHTML =
    "❌ Password must contain uppercase, lowercase and number";
    return;
    }
    
    message.innerHTML =
    "✅ Booking Submitted Successfully";
    
    });
    
    // AI CHATBOT + FETCH API
    
    async function sendMessage(){
    
    let input =
    document.getElementById("userInput");
    
    let userMessage =
    input.value.trim();
    
    if(userMessage === ""){
    return;
    }
    
    let chatBox =
    document.getElementById("chatBox");
    
    chatBox.innerHTML +=
    `<p><b>You:</b> ${userMessage}</p>`;
    
    await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
    );
    
    let reply = "";
    
    let msg =
    userMessage.toLowerCase();
    
    if(msg.includes("dubai")){
    
    reply =
    "Dubai package starts from $899 with hotel and transport.";
    
    }
    else if(msg.includes("turkey")){
    
    reply =
    "Turkey package starts from $1299 for 7 days.";
    
    }
    else if(msg.includes("paris")){
    
    reply =
    "Paris package starts from $1499 including sightseeing.";
    
    }
    else if(msg.includes("hello")){
    
    reply =
    "Hello! How can I help you with your travel plans?";
    
    }
    else{
    
    reply =
    "I can help with Dubai, Turkey, Paris and travel packages.";
    
    }
    
    chatBox.innerHTML +=
    `<p><b>Bot:</b> ${reply}</p>`;
    
    chatBox.scrollTop =
    chatBox.scrollHeight;
    
    input.value = "";
    
    }
    let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

document.querySelector(".next")
.addEventListener("click",()=>{

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

document.querySelector(".prev")
.addEventListener("click",()=>{

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

},3000);
const chatIcon =
document.getElementById("chatIcon");

const chatContainer =
document.getElementById("chatContainer");

const closeChat =
document.getElementById("closeChat");

chatIcon.onclick = function(){

    chatContainer.style.display = "block";

}

closeChat.onclick = function(){

    chatContainer.style.display = "none";

}