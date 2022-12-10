const pagina = document.getElementById("pagina")
const link = document.getElementById("link")
const denuevo = document.getElementById('denuevo')

pagina.onload = ()=>{
    setTimeout(() => {
        link.click()
    }, 2000);
    setTimeout(() => {
        alert('Trolleado :V')
    }, 3000);
}

denuevo.addEventListener('click',()=>{
    setTimeout(() => {
        alert('Denuevo? :V')
    }, 1000);
})