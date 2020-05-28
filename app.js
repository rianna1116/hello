console.log("Hello world!");

const buttons = Array.from(document.getElementsByClassName("button"))
console.log(buttons)
buttons.forEach(el => {
    el.addEventListner("click" , () => {
        let p1 = el.id;
        console.log(p1);
    });
});