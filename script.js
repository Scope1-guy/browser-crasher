const browserHang = document.querySelector('.btn-for-crash');
const windowClose = document.querySelector('.btn-for-close');
// const backgroundSwitch = Math.random();
// const body = document.body;

// if (backgroundSwitch >= 0 && backgroundSwitch <= 0.5) {
//     body.style.backgroundImage = "bg/855a19394f666379808ed23b41b8dd4e.jpg";
// } else {
//     body.style.backgroundImage = "bg/8839abc0a461bbf180a48c32f928f1a5.jpg";
// }

browserHang.addEventListener('click', () => {
    for(let i = 0; i <= 10; i -= 2) {
        console.log(i);
    }
});

windowClose.addEventListener('click', () => {
    window.close();
})