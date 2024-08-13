

// Select all anchor elements
const hrefLinks = document.querySelectorAll('a[href]');
const menteeLoginBtn = document.querySelectorAll('.menteelog');
const mentorLoginBtn = document.querySelectorAll('.mentorlog');
const x = document.getElementById('menteelogin');
const y = document.getElementById('mentorlogin');
const messageInput = document.querySelectorAll(".messageinput");
const addMessage = document.getElementById('add-modal');

const timerElement = document.getElementById('timer');


// FOR DISPLAYING HIDDEN MESSAGE
const toggleMessageInput = () => {
    addMessage.classList.toggle("visible"); 
 };
messageInput.forEach(message =>{
    message.addEventListener("click", toggleMessageInput);
})




menteeLoginBtn.forEach(button => {
    button.addEventListener('click', function(event){
        event.preventDefault();
        x.style.left = "4px";
        y.style.right = "-510px";
        x.style.opacity = 1;
        y.style.opacity = 0;
        menteeLoginBtn.className.add('active')
    });
});

mentorLoginBtn.forEach(button => {
    button.addEventListener('click', function(event){
        event.preventDefault(); 
        x.style.left = "-510px";
        y.style.right = "5px";
        x.style.opacity = 0;
        y.style.opacity = 1;
        mentorLoginBtn.className.add('active')
    });
});


// hrefLinks.forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent default link behavior
//         document.body.classList.add('fade-out');

//         const targetHref = this.getAttribute('href');

//         setTimeout(() => {
//             window.location.href = targetHref;
//         }, 500); // Delay in milliseconds for fade-out effect
//     });
// });





let countdownHours = 3; // Starting hours for the countdown
let countdownMinutes = 0; // Starting minutes for the countdown
let countdownSeconds = 0; // Starting seconds for the countdown

const updateTimer = () => {
    if (countdownHours === 0 && countdownMinutes === 0 && countdownSeconds === 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "00:00:00";
    } else {
        if (countdownSeconds === 0) {
            if (countdownMinutes === 0) {
                countdownHours--;
                countdownMinutes = 59;
                countdownSeconds = 59;
            } else {
                countdownMinutes--;
                countdownSeconds = 59;
            }
        } else {
            countdownSeconds--;
        }
        
        const displayHours = String(countdownHours).padStart(2, '0');
        const displayMinutes = String(countdownMinutes).padStart(2, '0');
        const displaySeconds = String(countdownSeconds).padStart(2, '0');
        timerElement.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
    }
};

const timerInterval = setInterval(updateTimer, 1000);







