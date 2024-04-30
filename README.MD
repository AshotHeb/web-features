# Web Components

### Custom Elements

      Custom elements are a part of the web components.They has 2 types
        - Auntonomous : when the new element extends from the HTMLElement main instance
        - Customized built-in : when the new element extends from an existing element, for instance from HTMLButtonElement

### Shadow DOM

    Shadow DOM serves for encapsulation. It allows a component to have its very own “shadow” DOM tree, that can’t be accidentally accessed from the main document, may have local style rules, and more.

    elem.attachShadow({mode: 'open'});

### Template Element

    The <template> HTML element serves as a mechanism for holding HTML fragments, which can either be used later via JavaScript or generated immediately into shadow DOM

    <template id="tmpl">
         <p> I am a Template Element! </p>
     </template>

     <script>
        const parent = d.createElement('div')
        parent.append(tmpl.content.cloneNode(true))
     </script>

### Shadow DOM Slots, composition

       Slots allow to show elements from light DOM in specified places of shadow DOM.

        <user-card id="userCard">
             <span slot="username">John Smith</span>
        </user-card>

### CustomEvent

    With this class you can create and dispatch your custom built events
