export const startScrollEvents = () => {
  const scrollBtn = document.querySelector("#scrollBtn");

  if (!scrollBtn) return;

  const updateScrollButton = () => {
    const isBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;

    scrollBtn.classList.toggle("scroll-up", isBottom);

    scrollBtn.setAttribute(
      "aria-label",
      isBottom ? "Scroll to top" : "Scroll down"
    );
  };

  scrollBtn.addEventListener("click", () => {
    const isBottom = scrollBtn.classList.contains("scroll-up");

    window.scrollTo({
      top: isBottom ? 0 : document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", updateScrollButton);
  window.addEventListener("resize", updateScrollButton);

  updateScrollButton();
};