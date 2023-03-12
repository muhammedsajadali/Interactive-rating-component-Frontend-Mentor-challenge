
/* ----------------------------variables section ------------------------------ */


let button = document.querySelector(".sbmt-btn");
let mainContainer = document.querySelector(".main-container");
let feedbackReplyContainer = document.querySelector(".feedback-reply-container");
let userRatedCount = document.getElementById('user-rated-count');
let userRating = 0;
let ratingBtns=[];
let ratingCountsContainer = document.querySelector(".rating-btns-container");
let ratingCountsContainerChildren = ratingCountsContainer.children;
let submitBtn = document.querySelector(".sbmt-btn");


/* ----------------------------functions section ------------------------------ */

// function for toggling between styles for the rating buttons 
function ratingBtnsStyleToggler(){
    for(i=0;i<5;i++){
        ratingBtns.push(ratingCountsContainerChildren[i]);
    }
    ratingBtns.forEach(ratingBtn => {
        ratingBtn.addEventListener('click',()=>{
            ratingBtn.classList.add('rating-btn-clicked');
            userRating = ratingBtn.innerText;
            for(i=0;i<5;i++){ // this loops ensures that the class 'rating-btn-clicked' is added only to a button
                if(ratingBtns[i]!== ratingBtn){ 
                    ratingBtns[i].classList.remove('rating-btn-clicked')
                }
            }
        });
    });
};

//fucntion for responding to the users' rating
function feedbackResponding(){
    if(userRating>=1){
        userRatedCount.innerText = userRating;
        mainContainer.style.display ="none"
        feedbackReplyContainer.style.display ="flex";
    }
    else{
       alert("Please rate us on a scale of 1-5")
    }
}


/* ----------- invoking function and setting addEventListener sections ------------- */


ratingBtnsStyleToggler();
submitBtn.addEventListener("click",feedbackResponding)