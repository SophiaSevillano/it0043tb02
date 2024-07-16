document.addEventListener("DOMContentLoaded", function() {
    // Selecting the elements
    let menu = document.querySelector(".menu-list");
    let barsIcon = document.querySelector(".fa-bars");

    // Adding click event listener to the bars icon
    barsIcon.addEventListener("click", function() {
        menu.classList.toggle("show");
    });

    const questions = document.querySelectorAll(".question");

    questions.forEach(function(question) {
        question.addEventListener("click", function() {
            // Toggle active class on the clicked question
            this.classList.toggle("active");

            // Toggle display of answer
            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
    
});


var togglebtn=document.querySelector(".togglebtn");
        var nav=document.querySelector(".navlinks");
        var links=document.querySelector(".navlinks li");

        togglebtn.addEventListener("click", function(){
            this.classList.toggle("click");
            nav.classList.toggle("open");
        })

        var typed=new Typed(".input",{
            strings:["Graphic Designer","UX Designer","Web Developer"],
            typedSpeed:70,
            backSpeed:55,
            loop:true
        })