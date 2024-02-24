This is a collection of simple snippets that I have found to be useful and that I keep using.
By publishing them here I'm making it easy for myself to find them, and maybe for others as well.

### Highlight headings

By running this snippet in any browser's console you can highlight the heading of any website.

```javascript
// run in the browser's console

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

This is how it would look like.

![Example of highlight headings script](/images/stuff-snippets.png)

---

### Mark as viewed/not viewed on GitHub

These snippets are really helpful when going through large code reviews in GitHub.
You don't need to click the _viewed_ checkbox for each file, you just run a snippet.

```javascript
// Mark all as viewed
document.querySelectorAll(".js-reviewed-checkbox").forEach((elem) => {
  if (elem.checked) return;
  let clickEvent = new MouseEvent("click");
  elem.dispatchEvent(clickEvent);
});

// Mark all as not viewed
document.querySelectorAll(".js-reviewed-checkbox").forEach((elem) => {
  if (!elem.checked) return;
  let clickEvent = new MouseEvent("click");
  elem.dispatchEvent(clickEvent);
});
```
