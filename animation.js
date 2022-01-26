/*const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const img = entry.target.querySelector('.ads-img');;
        if (entry.isIntersecting) {
            img.classList.add('.ads-img-class');
            console.log("added class")
            return;
        }
        img.classList.remove('.ads-img-class');
      });

  });
  

  observer.observe(document.getElementById('ads-img'));*/

  const myImgs = document.querySelectorAll('.ads-img');

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          console.log('in the view');
          entry.target.classList.add("ads-img-class");
          observer.unobserve(entry.target);
        } else {
          console.log('out of view');
          entry.target.classList.remove("ads-img-class");
        }
      });
});

myImgs.forEach(image => {
    observer.observe(image);
  });