//https://javascript.info/custom-elements

class AutonomousCustomElement extends HTMLElement {
  constructor() {
    super();
  }

  static observedAttributes = ["color", "size"];

  connectedCallback() {
    // Այս ֆունկցիան կանչվում է element define ից հետո
    this.innerHTML = `
        Autonomous Custom Element
    `;
  }

  disconnectedCallback() {
    // Այս ֆունկցիան կանչվում է երբ որևէ custom element ը հեռացվում է էջից
    console.log("Custom element removed from page.");
  }

  adoptedCallback() {
    // Այս ֆունկցիան կանչվում է երբ որևէ custom element ը տեղափոխվում է մեկ էջից մյուսին
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Այս ֆունկցիան կանչվում է երբ որևէ attribute ի value ը փոփոխվում է
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("autonomous-custom-element", AutonomousCustomElement);
