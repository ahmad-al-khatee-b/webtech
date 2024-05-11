document.addEventListener("DOMContentLoaded", function () {
    const rightImages = document.querySelectorAll('.right-img');
    rightImages.forEach(rightImg => {
        rightImg.addEventListener('click', function () {
            const currentActive = document.querySelector('.side-section .active');
            const nextActive = currentActive.nextElementSibling;
            if (nextActive) {
                currentActive.classList.remove('active');
                nextActive.classList.add('active');
            } else {
                document.querySelector('.side-section div:nth-child(1)').classList.add('active');
                document.querySelector('.side-section div:last-child').classList.remove('active');
            }
        });
    });

    const leftImages = document.querySelectorAll('.left-img');
    leftImages.forEach(leftImg => {
        leftImg.addEventListener('click', function () {
            const currentActive = document.querySelector('.side-section .active');
            const prevActive = currentActive.previousElementSibling;
            if (prevActive) {
                currentActive.classList.remove('active');
                prevActive.classList.add('active');
            } else {
                document.querySelector('.side-section div:last-child').classList.add('active');
                document.querySelector('.side-section div:first-child').classList.remove('active');
            }
        });
    });
});
/*
---------------------------
 Min Yut End-----------
---------------------------
*/


/*
---------------------------
 Video Yut Start-----------
---------------------------
*/
document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById("playButton");
    const videoContainer = document.querySelector(".video");
    const exitButton = document.querySelector(".exitButton");
    const videoIframe = document.createElement("iframe");
    videoIframe.setAttribute("width", "560");
    videoIframe.setAttribute("height", "315");
    videoIframe.setAttribute("src", "https://www.youtube.com/embed/kwdehS3qoBE?si=7M0Pup2ZPznOTVAe");
    videoIframe.setAttribute("frameborder", "0");
    videoIframe.setAttribute("allowfullscreen", "true");
    videoContainer.appendChild(videoIframe);

    playButton.addEventListener("click", function (event) {
        event.preventDefault();
        videoIframe.style.display = "block";
        exitButton.style.display = "block";
    });

    exitButton.addEventListener("click", function (event) {
        event.preventDefault();
        videoIframe.style.display = "none";
        exitButton.style.display = "none";
    });
});
/*
---------------------------
 Video Yut End-----------
---------------------------
*/


/*
---------------------------
 emial Start---------------
---------------------------
*/
function sendMails() {
    var emailsInput = document.getElementById("emails").value;


    if (emailsInput.trim() === "") {
        showexitMessages();
        return;
    }

    var params = {
        emails: emailsInput,
    };

    const serviceID = "service_p4gp8o9";
    const templateID = "template_7j260ye";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("emails").value = "";
            console.log(res);
            alert("Your message sent successfully!!")
        })
        .catch(err => console.log(err));
}


function validateAndSend() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' && email.trim() === '' || subject.trim() === '' && message.trim() === '') {
        showexitMessage();
        return;
    }

    sendMail();
}

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_p4gp8o9";
    const templateID = "template_ix8i7bp";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            showSuccessMessage();
        })
        .catch(err => console.log(err));
}

function showexitMessages() {
    var successMessage = document.getElementById('form-message-exits');
    successMessage.style.display = 'block';
    setTimeout(function () {
        successMessage.style.display = 'none';
    }, 4000);
}


function showexitMessage() {
    var successMessage = document.getElementById('form-message-exit');
    successMessage.style.display = 'block';
    setTimeout(function () {
        successMessage.style.display = 'none';
    }, 4000);
}

function showSuccessMessage() {
    var successMessage = document.getElementById('form-message-success');
    successMessage.style.display = 'block';
    setTimeout(function () {
        successMessage.style.display = 'none';
    }, 4000);
}
/*
---------------------------
 emial End---------------
---------------------------
*/
const anmtion = document.querySelector('.anmtion');
const logo = document.querySelector('.logo');
const logospan = document.querySelectorAll('.logo1');

window.addEventListener('DOMContentLoaded', function () {

    setTimeout(() => {
        logospan.forEach(function (span, idx) {
            setTimeout(function () {
                span.classList.add('active');
            }, (idx + 1) * 300)
        });
        setTimeout(function () {
            logospan.forEach(function (span, idx) {
                setTimeout(function () {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 700);
        setTimeout(function () {
            anmtion.style.top = '-100vh';
        }, 700)
    })
})




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.Hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElementss = document.querySelectorAll('.Hiddens');
hiddenElementss.forEach((el) => observers.observe(el));


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $(".navbarS").addClass("bg-scroll");
    } else {
        $(".navbarS").removeClass("bg-scroll");
    }
});






var typedSpan = document.querySelector('.typed');
var typedItems = typedSpan.getAttribute('data-typed-items').split(',');
var currentItem = 0;
typedSpan.textContent = typedItems[currentItem];
function typeNextItem() {
    currentItem++;
    if (currentItem >= typedItems.length) {
        currentItem = 0;
    }
    typedSpan.textContent = typedItems[currentItem];
}

setInterval(typeNextItem, 2000);



var swiper = new Swiper('.blog-slider', {
    spaceBetween: 10,
    effect: 'creative',
    loop: true,
    mousewheel: {
        invert: false,
    },

    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});










