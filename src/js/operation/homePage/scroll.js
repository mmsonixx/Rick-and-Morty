export const startScrollEvents = () => {
  const scrollBtn = document.querySelector("#scrollBtn");

  if (!scrollBtn) return;

  const updateScrollButton = () => {
    const isBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;

    scrollBtn.innerHTML = isBottom
      ? `<i class="fa-solid fa-arrow-up"></i>`
      : `<i class="fa-solid fa-arrow-down"></i>`;
  };

  scrollBtn.addEventListener("click", () => {
    const isBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;

    window.scrollTo({
      top: isBottom ? 0 : document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", updateScrollButton);

  updateScrollButton();
};