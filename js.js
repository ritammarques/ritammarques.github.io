const parallaxItem = document.querySelectorAll('.parallax-item');
const str =  Math.floor(Math.random() * 8) + 2;
document.addEventListener('mousemove', function(e) {
    const parallaxItem = document.querySelectorAll('.parallax-item');
    for (const parallax of parallaxItem) {
      const str = parallax.id;
      const xPos = (window.innerWidth / 2 - e.clientX) / str;
      const yPos = (window.innerHeight / 2 - e.clientY) / str;
      parallax.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }
    });



    window.addEventListener('scroll', reveal);
    function reveal(){
      var reveals = document.querySelectorAll('.reveal');
      for (var i = 0; i < reveals.length; i++){
        var win_height = window.innerHeight;
        var reveal_top = reveals[i].getBoundingClientRect().top;
        var reveal_point = 100;
        if (reveal_top < win_height - reveal_point) {
          reveals[i].classList.add('active');
        } //else {
          //reveals[i].classList.remove('active');
        //}
      }
    }

    document.querySelector("img.before").addEventListener('click', hand);
function hand(){
   document.querySelector("img.before").classList.add("active");
   document. querySelector("img.after").classList.add("active");
}