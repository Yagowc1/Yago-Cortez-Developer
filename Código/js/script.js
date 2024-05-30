document.addEventListener("DOMContentLoaded", function() {
    const icone1 = document.querySelector(".navbar a[href='#']");
    const icone2 = document.querySelector(".navbar a[href='#sobre-mim-div']");
    const icone3 = document.querySelector(".navbar a[href='#projetos-div']");
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      const threshold = 900; // Altura de mudança
  
      if (scrollPosition < threshold) {
        icone1.classList.add("bola-vermelha");
        icone2.classList.remove("bola-vermelha");
        icone3.classList.remove("bola-vermelha");
      } else if (scrollPosition >= threshold && scrollPosition < threshold * 2) {
        icone1.classList.remove("bola-vermelha");
        icone2.classList.add("bola-vermelha");
        icone3.classList.remove("bola-vermelha");
      } else {
        icone1.classList.remove("bola-vermelha");
        icone2.classList.remove("bola-vermelha");
        icone3.classList.add("bola-vermelha");
      }
    });
  });
  