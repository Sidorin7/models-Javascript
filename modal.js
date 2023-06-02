function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add("hide");
  modal.classList.remove("show");
  // Либо вариант с toggle - но тогда назначить класс в верстке
  document.body.style.overflow = "";
}
function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add("show");
  modal.classList.remove("hide");
  // Либо вариант с toggle - но тогда назначить класс в верстке
  document.body.style.overflow = "hidden";
  console.log(modalTimerId);
  if(modalTimerId){
    clearInterval(modalTimerId);
  }
}
function modal(triggerSelector, modalSelector, modalTimerId) {
  // Modal

  const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalSelector, modalTimerId));
  });



  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalSelector);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalSelector);
    }
  });



  function showModelByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener("scroll", showModelByScroll);
    }
  }

  window.addEventListener("scroll", showModelByScroll);
}

export default modal;
export {closeModal};
export {openModal};
