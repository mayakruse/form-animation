function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            //Check for validation
            if(input.type === "text" && validateUser(input)){ //why "text" ?
                nextSlide(parent,nextForm);
            } else if(input.type === 'email' && validateEmail(input)){ //why "email" ?
                nextSlide(parent, nextForm);
            } else if(input.type === "password" && validateUser(input)){
                nextSlide(parent,nextForm);
            } else {
                parent.style.animation = "shake 0.5s ease"; //if everything fails
            }
            //get rid of animation
            parent.addEventListener("animationend", () => {
                parent.style.animation = "";
            })

        })
    })
}

function validateUser(user){
    if(user.value.length < 6){
        console.log('not enough characters');
        error('rgb(189,87,87');
    } else {
        error("rgb(87, 189, 130)"); //technically not an error
        return true;
    }
    }

    function validateEmail(email){
        const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //wtf is this? what is regex?
        if(validation.test(email.value)){ //this is tested against the regex and if correct then it will return true
            error("rgb(87, 189, 130)"); //technically not an error
            return true;
        }else {
            error("rgb(189,87,87");
        }
        }
    



function error(color){
    document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

animatedForm();