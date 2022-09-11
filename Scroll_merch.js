/*import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';



const style_img=document.querySelectorAll(".Merch_container");
console.log(style_img.length)

style_img.forEach((image)=>{
    const animated_Gallery= new ScrollTimeline({
        scrollOffsets: [
            {target: image, edge: "end", threshold: "0"},
            {target: image, edge: "start", threshold: "1"}
        ],
    });
    image.animate({
        transform:[
            "perspective(1000px) rotateX(45deg)",
            "perspective(1000px rotate(0)"
        ],
        opacity:["0","1"],
        },
        {
            duration:1,
            easing:"linear",
            timeline:animated_Gallery,
        }
    );
});*/



const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const Merch_title = entry.target.querySelector('.Merch_title');

    const Merch_container_1 = entry.target.querySelector('.Merch_container:nth-child(1)');
    const Merch_container_2 = entry.target.querySelector('.Merch_container:nth-child(2)');
    const Merch_container_3 = entry.target.querySelector('.Merch_container:nth-child(3)');
    const Merch_container_4 = entry.target.querySelector('.Merch_container:nth-child(4)');
    const Merch_container_5 = entry.target.querySelector('.Merch_container:nth-child(5)');
    const Merch_container_6 = entry.target.querySelector('.Merch_container:nth-child(6)');
    const Merch_container_7 = entry.target.querySelector('.Merch_container:nth-child(7)');

    if (entry.isIntersecting) {
      console.log("yes");
      Merch_container_1.classList.add('animate_perspective_and_rotate');
      Merch_container_2.classList.add('animate_perspective_and_rotate');
      Merch_container_3.classList.add('animate_perspective_and_rotate');
      Merch_container_4.classList.add('animate_perspective_and_rotate');
      Merch_container_5.classList.add('animate_perspective_and_rotate');
      Merch_container_6.classList.add('animate_perspective_and_rotate');
      Merch_container_7.classList.add('animate_perspective_and_rotate');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    Merch_container_1.classList.remove('animate_perspective_and_rotate');
    Merch_container_2.classList.remove('animate_perspective_and_rotate');
    Merch_container_3.classList.remove('animate_perspective_and_rotate');
    Merch_container_4.classList.remove('animate_perspective_and_rotate');
    Merch_container_5.classList.remove('animate_perspective_and_rotate');
    Merch_container_6.classList.remove('animate_perspective_and_rotate');
    Merch_container_7.classList.remove('animate_perspective_and_rotate');
  });
});

observer2.observe(document.querySelector('.Merch_list'));
