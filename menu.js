
const menu = document.getElementById("menu");
const openBtn = document.getElementById("open_menu");
const closeBtn = document.getElementById("close_menu");



openBtn.addEventListener("click", () => {
    menu.classList.add("open");


});

openBtn.addEventListener("click", () => {
    menu.classList.remove("open");

});


// document.querySelectorAll(".has-submenu").forEach(item => {
//     item.addEventListener("click", () => {


//         document.querySelectorAll(".has-submenu.open").forEach(openItem => {
//             if (openItem !== item) {
//                 openItem.classList.remove("open");
//             }
//         });

//         item.classList.toggle("open");
//     });
// });

