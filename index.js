const webTitle = "Tilt's webspace";

const headerTitle = document.getElementsByClassName("header-txt")[0];
bindElements([
    {ele: document, prop: "title"},
    {ele: headerTitle, prop: "innerText"}
])(webTitle);

// Helpers
function bindElements(elements) {
    return (value) => elements.forEach(e => {
        e.ele[e.prop] = value;
    }); 
}