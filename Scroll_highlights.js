const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    const latest_Merch_container_1 = entry.target.querySelector('.Latest_Merch_container:nth-child(1)');
    const latest_Merch_container_2 = entry.target.querySelector('.Latest_Merch_container:nth-child(2)');
    const latest_Merch_container_3 = entry.target.querySelector('.Latest_Merch_container:nth-child(3)');

    if (entry.isIntersecting) {
      console.log("yes");
      latest_Merch_container_1.classList.add('Latest_Merch_container_animate');
      latest_Merch_container_2.classList.add('Latest_Merch_container_animate');
      latest_Merch_container_3.classList.add('Latest_Merch_container_animate');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    latest_Merch_container_1.classList.remove('Latest_Merch_container_animate');
    latest_Merch_container_2.classList.remove('Latest_Merch_container_animate');
    latest_Merch_container_3.classList.remove('Latest_Merch_container_animate');
  });
});

observer2.observe(document.querySelector('.Latest_Merch'));