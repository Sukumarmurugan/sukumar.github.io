document.addEventListener('DOMContentLoaded', function () {
    const dynamicTxts = document.querySelector('.dynamic-txts');
    const textArray = ["DevOps Engineer", "AWS Solution Architect", "Linux Admin"];
    let i = 0;

    setInterval(function () {
        dynamicTxts.innerHTML = `<li><span>${textArray[i]}</span></li>`;
        i = (i + 1) % textArray.length;
    }, 2000);
});
