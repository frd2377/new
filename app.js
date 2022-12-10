const pagina = document.getElementById("pagina")
const link = document.getElementById("link")

pagina.onload = ()=>{
    setTimeout(() => {
        link.click()
    }, 2000);
    setTimeout(() => {
        alert('Trolleado :V')
    }, 3000);
}
