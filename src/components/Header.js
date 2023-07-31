
import troll  from '../img/este1.png'


const Header = () => {

    return(

        <header className='header'>

                <img src= { troll }  alt='foto1' className='header-image'/>
                <h2 className='header-title'> Meme Generator </h2>
                <h4 className='header-parrafe'>  React-Course - Project Meme Generator</h4>

        </header>

    )

}

export default Header