//https://javascript.info/custom-elements

class HelloButton extends HTMLButtonElement {
  constructor() {
    super();
    // Ստեղ click -ի event ենք դնում այս էլեմենտի վրա
    this.addEventListener("click", () => alert("Hello!"));
  }
}

customElements.define("hello-button", HelloButton, { extends: "button" });
