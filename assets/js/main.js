//menu scrip social links
function toggleBar(event) {
    const container = document.querySelector(".social-container");
    const links = document.querySelector(".social-links");

    // Toggle the expanded class on the container
    container.classList.toggle("expanded");

    // Show or hide social links
    if (container.classList.contains("expanded")) {
        links.style.display = "flex"; // Show the social links
    } else {
        links.style.display = "none"; // Hide the social links
    }
}

// Close the container if the user clicks anywhere outside of it
document.addEventListener('click', function(event) {
    const container = document.querySelector(".social-container");
    if (!container.contains(event.target)) {
        container.classList.remove("expanded");
        document.querySelector(".social-links").style.display = "none"; // Hide social links
    }
});



//QR cod eapi script
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


 function generateQR(){
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error'); 
        },1000);
    }


 }
