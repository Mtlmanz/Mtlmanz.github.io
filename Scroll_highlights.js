const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    const Highlights_container_1 = entry.target.querySelector('.Highlights_container:nth-child(1)');
    const Highlights_container_2 = entry.target.querySelector('.Highlights_container:nth-child(2)');
    const Highlights_container_3 = entry.target.querySelector('.Highlights_container:nth-child(3)');
    const Highlights_container_4 = entry.target.querySelector('.Highlights_container:nth-child(4)');
    const Highlights_container_5 = entry.target.querySelector('.Highlights_container:nth-child(5)');
    if (entry.isIntersecting) {
      console.log("yes");
      Highlights_container_1.classList.add('Highlights_container_animate');
      Highlights_container_2.classList.add('Highlights_container_animate');
      Highlights_container_3.classList.add('Highlights_container_animate');
      Highlights_container_4.classList.add('Highlights_container_animate');
      Highlights_container_5.classList.add('Highlights_container_animate');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    Highlights_container_1.classList.remove('Highlights_container_animate');
    Highlights_container_2.classList.remove('Highlights_container_animate');
    Highlights_container_3.classList.remove('Highlights_container_animate');
    Highlights_container_4.classList.remove('Highlights_container_animate');
    Highlights_container_5.classList.remove('Highlights_container_animate');
  });
});

observer2.observe(document.querySelector('.Highlights'));
