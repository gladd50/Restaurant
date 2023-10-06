const Menu = () => {
        const content =document.getElementById('content-menu')
        content.innerHTML = ''
        document.getElementById('content-home').style.display = 'none'
        document.getElementById('content-about').style.display = 'none'
        content.style.display = 'block'

        const cont = document.createElement('div')
        cont.classList.add('menu')
        cont.innerHTML = `<div class="food">
        <div class="food-img">
            <h3>Foods</h3>
        </div>
        <div class="list-menu">
            <div class="list">
                <p>Pecel Lele <br></p>
                <p>Lele, nasi, sambel, Lalapan</p>
            </div>
            <div class="list">
                <p>Pecel Ayam <br></p>
                <p>Ayam, nasi, sambel, Lalapan</p>
            </div>
            <div class="list">
                <p>Pecel Jamur <br></p>
                <p>Jamur, nasi, sambel, Lalapan</p>
            </div>
        </div>
    </div>
    <div class="food">
        <div class="drink-img">
            <h3>Drinks</h3>
        </div>
        <div class="list-menu">
            <div class="list">
                <p>Es teh <br></p>
                <p>Es, teh seduh</p>
            </div>
            <div class="list">
                <p> Es jeruk <br></p>
                <p>Jeruk peras, es</p>
            </div>
            <div class="list">
                <p>Es Kopi butter <br></p>
                <p>Kopi, es, butter</p>
            </div>
        </div>
    </div>`
        content.append(cont)
}
export default Menu