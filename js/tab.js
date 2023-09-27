(() => {
  const $doc = document;
  const $info = $doc.getElementById("js-info");
  const $label = $info.querySelectorAll("#js-info__tabs__labels > li");
  const $content = $doc.querySelectorAll("#js-info__tabs__contents > li");

  for (let i = 0; i < $label.length; i++) {
    $label[i].addEventListener("click", (e) => {
      e.preventDefault();

      for (let j = 0; j < $label.length; j++) {
        $label[j].classList.remove("is-open");
        $content[j].classList.remove("is-open");
      }
      $content[i].classList.add("is-open");
      $label[i].classList.add("is-open");
    });
  }
})();
