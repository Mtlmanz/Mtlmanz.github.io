import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';






const title=document.querySelector(".title");
const carousel=document.querySelector(".carousel");
const description_text =document.querySelector('.Description_text');


/**const animated_title= new ScrollTimeline({
    scrollOffsets: [
        {target: carousel, edge: "end", threshold: "1"},
        {target: carousel, edge: "start", threshold: "0"}
    ],
});



title.animate({
    color:['goldenrod','white'],
    },
    {
        duration:4,
        easing:"linear",
        timeline:animated_title
    }
);**/

/**var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var titleYpos=title.getBoundingClientRect().top;
var headerYpos=header_point.getBoundingClientRect().top;



window.addEventListener('scroll', function() {
    //var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollTop = window.pageYOffset || title.scrollTop;
    var scrollPercent = scrollTop/scrollArea || 0;
    var aim=scrollPercent*window.innerHeight + 'px';
    console.log(aim);
    console.log(titleYpos);
    title.style.top =scrollPercent*window.innerHeight + 'px';
    if(title.getBoundingClientRect().top<titleYpos){
        title.style.top=titleYpos;
    }
    if(title.getBoundingClientRect().top>headerYpos){
        title.style.top=headerYpos;
    }
    //title.style.top =scrollPercent*window.innerHeight + 'px';
    //square2.style.left = 800 - scrollPercent*window.innerWidth*0.6 + 'px';
});**/

const mainTitle = document.querySelector('.title');

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const d_text = entry.target.querySelector('.Description_text');

    if (entry.isIntersecting) {
      console.log("yes");
      d_text.classList.add('get_bigger');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    d_text.classList.remove('get_bigger');
  });
});

observer1.observe(document.querySelector('.Description'));


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const latest_Merch_title = entry.target.querySelector('.Latest_Merch_title');

    const latest_Merch_container_1 = entry.target.querySelector('.Latest_Merch_container:nth-child(1)');
    const latest_Merch_container_2 = entry.target.querySelector('.Latest_Merch_container:nth-child(2)');
    const latest_Merch_container_3 = entry.target.querySelector('.Latest_Merch_container:nth-child(3)');
    const latest_Merch_container_4 = entry.target.querySelector('.Latest_Merch_container:nth-child(4)');
    const latest_Merch_container_5 = entry.target.querySelector('.Latest_Merch_container:nth-child(5)');

    if (entry.isIntersecting) {
      console.log("yes");
      latest_Merch_title.classList.add('typing');
      mainTitle.classList.add('MainTitle');
      latest_Merch_container_1.classList.add('Latest_Merch_container_animate');
      latest_Merch_container_2.classList.add('Latest_Merch_container_animate');
      latest_Merch_container_3.classList.add('Latest_Merch_container_animate');
      latest_Merch_container_4.classList.add('Latest_Merch_container_animate');
      latest_Merch_container_5.classList.add('Latest_Merch_container_animate');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    latest_Merch_title.classList.remove('typing');
    mainTitle.classList.remove('MainTitle');
    latest_Merch_container_1.classList.remove('Latest_Merch_container_animate');
    latest_Merch_container_2.classList.remove('Latest_Merch_container_animate');
    latest_Merch_container_3.classList.remove('Latest_Merch_container_animate');
    latest_Merch_container_4.classList.remove('Latest_Merch_container_animate');
    latest_Merch_container_5.classList.remove('Latest_Merch_container_animate');
  });
});

observer2.observe(document.querySelector('.Latest_Merch'));


function changeImage(x) {
    var theImg = document.getElementById(x);
    //console.log(theImg.src);
    if (theImg.src.indexOf("_f") != -1) {
        theImg.src = theImg.src.replace("_f", "_b");
        console.log(theImg.src);
    }
    else if (theImg.src.indexOf("_b") != -1) {
        theImg.src = theImg.src.replace("_b", "_f");
    }
}


