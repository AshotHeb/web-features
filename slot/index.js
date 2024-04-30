customElements.define(
  "user-card",
  class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <div>Name:
          <slot name="username"></slot>
        </div>
        <div>Birthday:
          <slot name="birthday"></slot>
        </div>
      `;
    }
  }
);

// Slot change event

customElements.define(
  "custom-menu",
  class extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `<div class="menu">
      <slot name="title"></slot>
      <ul><slot name="item"></slot></ul>
    </div>`;

      // shadowRoot can't have event handlers, so using the first child
      this.shadowRoot.firstElementChild.addEventListener("slotchange", (e) =>
        console.log("slotchange: " + e.target.name)
      );
    }
  }
);

setTimeout(() => {
  menu.insertAdjacentHTML("beforeEnd", '<li slot="item">Lollipop</li>');
}, 1000);

setTimeout(() => {
  menu.querySelector('[slot="title"]').innerHTML = "New menu";
}, 2000);
