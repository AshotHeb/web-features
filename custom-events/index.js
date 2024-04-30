document.addEventListener("updateButtonColor", () => {
  button.style.backgroundColor = "red";
});

input.addEventListener("input", (e) => {
  const value = e.target.value;
  if (value.length > 5) {
    document.dispatchEvent(new CustomEvent("updateButtonColor"));
  }
});
