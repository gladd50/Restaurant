import './style.css' 
import drink from './images/drink.png'
import fishy from './images/fishy.png'
import food from './images/food.png'
import smol_ame from './images/smol_ame.jpg'

import About from './about'
import Menu from  './menu'

document.addEventListener('DOMContentLoaded', () => { 
    const Index = (() => {
        const refreshPage = () => {
            const content = document.getElementById('content-home')
            content.innerHTML = ''
            content.style.display= 'block'
            document.getElementById('content-about').style.display = 'none'
            document.getElementById('content-menu').style.display = 'none'

            const cont = document.createElement('div')
            cont.classList.add('content-grid-cont')
            cont.innerHTML = `<div class="content-text">
            <h1> Trias Restaurant </h1>
            <div class="text">Sedia Lalapan,</div>
            <span>Jamur, Lele, Ayam, bebek, dll</span>
            </div>
            <div class="content-image">
            <img id='iwak' alt="tunggu bos!">
            </div>`
            content.append(cont)
            document.getElementById('iwak').src = fishy
        }
        return{refreshPage}
    })()
    Index.refreshPage()

    const Navbar = (() =>{
        document.getElementById('smol_ame').src = smol_ame
        document.getElementById('smol_ame').addEventListener('click', Index.refreshPage)
        document.getElementById('home').addEventListener('click', Index.refreshPage)
        document.getElementById('about').addEventListener('click', About)
        document.getElementById('menu').addEventListener('click', Menu)
    })()
})
