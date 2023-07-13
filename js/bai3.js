let listLi = document.querySelectorAll(".content-right>ul>li");

listLi.forEach(function (item) {
  item.addEventListener("click", function (e) {
    for (let i = 0; i < listLi.length; i++) {
      if (listLi[i].classList.contains("active")) {
        listLi[i].classList.remove("active");
      }
    }

    item.classList.toggle("active");
  });
});

let listCard = document.querySelectorAll(".item-card");

listCard.forEach(function (item) {
  item.addEventListener("click", function (e) {
    for (let i = 0; i < listCard.length; i++) {
      if (listCard[i].classList.contains("active")) {
        listCard[i].classList.remove("active");
      }
    }

    item.classList.toggle("active");
  });
});
