Esta es una colección de simples fragmentos de código que me han resultado útiles y que sigo usando.
Al publicarlos aquí, me estoy facilitando el encontrarlos y tal vez a otras personas también.

### Resaltar encabezados

Al ejecutar este fragmento en la consola de cualquier navegador, puede resaltar los encabezados de cualquier sitio web.

```javascript
// correr en la consola del navegador

console.groupCollapsed("Page headings");

[1, 2, 3, 4, 5, 6].forEach((headingLevel) => {
  document.querySelectorAll(`h${headingLevel}`).forEach((headingNode) => {
    console.log(headingNode);

    headingNode.style.outline = "1px solid purple";

    const span = document.createElement("span");

    span.innerText = `H${headingLevel}`;
    span.style.backgroundColor = "purple";
    span.style.color = "white";
    span.style.marginRight = "0.25rem";

    headingNode.prepend(span);
  });
});

console.groupEnd();
```

Así es como se ve.

![Ejemplo de resultado del script resaltar títulos](/images/stuff-snippets.png)

---

### Marcar como visto/no visto en GitHub

Estos fragmentos son útiles al hacer grandes revisiones de código en GitHub.
No es necesario hacer clic en el checkbox de _visto_ para cada archivo, simplemente ejecutar un fragmento de código.

```javascript
// Marcar todo como visto
document.querySelectorAll(".js-reviewed-checkbox").forEach((elem) => {
  if (elem.checked) return;
  let clickEvent = new MouseEvent("click");
  elem.dispatchEvent(clickEvent);
});

// Marcar todo como no visto
document.querySelectorAll(".js-reviewed-checkbox").forEach((elem) => {
  if (!elem.checked) return;
  let clickEvent = new MouseEvent("click");
  elem.dispatchEvent(clickEvent);
});
```
