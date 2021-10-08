document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.navbar')
    const divLink = document.querySelector('.collapse')
    const allNavItems = document.querySelectorAll('.nav-link')
    
    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }


    allNavItems.forEach(item =>item.addEventListener('click', () => divLink.classList.remove('show')))






    window.addEventListener('scroll', addShadow)
})