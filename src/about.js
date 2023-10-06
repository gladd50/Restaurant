const About = () => {
        const content = document.getElementById('content-about')
        content.innerHTML = ''
        document.getElementById('content-home').style.display = 'none'
        content.style.display = 'block'
        document.getElementById('content-menu').style.display = 'none'

        const cont = document.createElement('div')
        cont.classList.add('container-about')
        cont.innerHTML = `<div class="about-container">
        <h1>Trias Restaurant <br><br></h1>
        <p>"Welcome to Trias Restaurant, where our passion for seafood comes to 
        life on your plate. Nestled in the heart of Trenggalek, 
        we take pride in offering an exquisite dining experience 
        centered around the freshest catch of the day.
         With a commitment to sustainability and sourcing from local
          fishermen, we ensure that every dish showcases the natural flavors
           and quality of our seafood. Our talented chefs craft each meal
            with precision and creativity, bringing out the unique essence of each fish
            . Whether you're a seafood enthusiast or new to the world of oceanic delicacies,
             we invite you to embark on a culinary journey with us. Join us at Trias, 
        where every bite tells a story of the sea."</p>
        </div>`
        content.append(cont)
    }
export default About