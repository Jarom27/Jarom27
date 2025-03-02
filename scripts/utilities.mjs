export function setYearOnFooter(){
    const yearComponent = document.getElementById("copyright-year")
    const currentDate = new Date()
    let year = currentDate.getFullYear()
    yearComponent.innerHTML = year
}