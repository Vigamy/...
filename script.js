const presente = document.getElementById("presente")
presente.addEventListener("click", (e) => {
    presente.classList.add('ppresente')
    presente.setAttribute("src", "./assets/presente_aberto.png")
    setInterval(1000, () => {
        
        presente.classList.add('aberto')
    })
    setTimeout(() => {
        window.location.href = "./project/index.html";
    }, 3000);
})
