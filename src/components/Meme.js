import React from 'react'
import memeData from "../memeData"




const Meme = () => {

    const [memeImage, setMemeImage] = React.useState("")

    let url;

    function getMemeImage(){

        const memeArray = memeData.data.memes
    
        const randomNumber = Math.floor(Math.random() * memeArray.length)
    
        //url = memeArray[randomNumber].url

       //console.log(url)

       setMemeImage(memeArray[randomNumber].url)
    
    }
    

    return(

        <main>

            <div className="form">

                <input type="text" className="form-inpt" placeholder="Top Text"/>
          
                <input type="text" className="form-inpt" placeholder="Buttom Text" />
         
                <button className="form-buttom" onClick={getMemeImage}>Get a new meme image</button>
       
            </div>

            <img src={memeImage} alt='imagen-meme' className='style-meme'/>

        </main>

    )

}

export default Meme