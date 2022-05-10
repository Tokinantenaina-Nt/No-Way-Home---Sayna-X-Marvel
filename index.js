window.onload = () => {
  const boutton_no_bg = document.querySelector(".boutton_no_bg");
  console.log(boutton_no_bg);
  boutton_no_bg.addEventListener("mouseenter", () => {
    boutton_no_bg.classList.add("shadow_boutton_no_bg_class");
  });
  boutton_no_bg.addEventListener("mouseenter", () => {
    boutton_no_bg.classList.remove("shadow_boutton_no_bg_class");
  });
  const tab_boutton = document.querySelectorAll(".boutton");
  const tab_boutton_no_bg = document.querySelectorAll(".boutton_no_bg");
  console.log("tab_boutton is", tab_boutton);
  console.log("tab_boutton_no_bg is", tab_boutton_no_bg);

  for (let i = 0; i < tab_boutton.length; i++) {
    console.log(tab_boutton.length);
    switch (tab_boutton[i]) {
      case tab_boutton[0]:
        tab_boutton[0].addEventListener("mouseenter", () => {
          tab_boutton[0].classList.add("shadow_boutton_class");
        });
        tab_boutton[0].addEventListener("mouseout", () => {
          tab_boutton[0].classList.remove("shadow_boutton_class");
        });
        break;
      case tab_boutton[1]:
        tab_boutton[1].addEventListener("mouseenter", () => {
          tab_boutton[1].classList.add("shadow_boutton_class");
        });
        tab_boutton[1].addEventListener("mouseout", () => {
          tab_boutton[1].classList.remove("shadow_boutton_class");
        });
        break;
      case tab_boutton[2]:
        tab_boutton[2].addEventListener("mouseenter", () => {
          tab_boutton[2].classList.add("shadow_boutton_class");
        });
        tab_boutton[2].addEventListener("mouseout", () => {
          tab_boutton[2].classList.remove("shadow_boutton_class");
        });
        break;
      case tab_boutton[3]:
        tab_boutton[3].addEventListener("mouseenter", () => {
          tab_boutton[3].classList.add("shadow_boutton_class");
        });
        tab_boutton[3].addEventListener("mouseout", () => {
          tab_boutton[3].classList.remove("shadow_boutton_class");
        });
        break;
      case tab_boutton[4]:
        tab_boutton[4].addEventListener("mouseenter", () => {
          tab_boutton[4].classList.add("shadow_boutton_class");
        });
        tab_boutton[4].addEventListener("mouseout", () => {
          tab_boutton[4].classList.remove("shadow_boutton_class");
        });
        break;
    }
  }

  for (let i = 0; i < tab_boutton.length; i++) {
    console.log(tab_boutton_no_bg.length);
    switch (tab_boutton_no_bg[i]) {
      case tab_boutton_no_bg[0]:
        tab_boutton_no_bg[0].addEventListener("mouseenter", () => {
          tab_boutton_no_bg[0].classList.add("shadow_boutton_no_bg_class");
          console.log(tab_boutton_no_bg[0]);
        });
        tab_boutton_no_bg[0].addEventListener("mouseout", () => {
          tab_boutton_no_bg[0].classList.remove("shadow_boutton_no_bg_class");
        });
        break;
      case tab_boutton_no_bg[1]:
        tab_boutton_no_bg[1].addEventListener("mouseenter", () => {
          tab_boutton_no_bg[1].classList.add("shadow_boutton_no_bg_class");
          console.log(tab_boutton_no_bg[1]);
        });
        tab_boutton_no_bg[1].addEventListener("mouseout", () => {
          tab_boutton_no_bg[1].classList.remove("shadow_boutton_no_bg_class");
        });
        break;
      case tab_boutton_no_bg[2]:
        tab_boutton_no_bg[2].addEventListener("mouseenter", () => {
          tab_boutton_no_bg[2].classList.add("shadow_boutton_no_bg_class");
          console.log(tab_boutton_no_bg[2]);
        });
        tab_boutton_no_bg[2].addEventListener("mouseout", () => {
          tab_boutton_no_bg[2].classList.remove("shadow_boutton_no_bg_class");
        });
        break;
    }
  }
};
