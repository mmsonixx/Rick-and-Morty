export const startScrollEvents = () => {
  const scrollBtn = document.querySelector("#scrollBtn");

  if (!scrollBtn) return;

  const icon = scrollBtn.querySelector("use");

  const updateScrollButton = () => {
    const isBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 10;

    icon.setAttribute(
      "href",
      `./img/icons/symbol-defs.svg#${isBottom ? "icon-arrow-up" : "icon-arrow-down"}`
    );

    scrollBtn.setAttribute(
      "aria-label",
      isBottom ? "Scroll to top" : "Scroll down"
    );
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