import React from 'react'
import myImage from '../assets/pic1.png.png'
import myImage1 from '../assets/pic3.png.png'
import myImage2 from '../assets/heart.png'
import myImage3 from '../assets/mesage.png'
import myImage4 from '../assets/shareit.png'
import myImage5 from '../assets/pic10.png.png'

 

const Content = () => {
  return (
    <div className='content-1'>
        <div className='box-1'>   
          <div className="pic">
            <img src={myImage} alt="myImage" className="pic1" />
             <div className="img-name">Lara Leones <br /><span className='thewallart'>thewallart</span></div>
             <div className="icon"></div>
          </div>
          <div className="para">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout .<span className='read-more'>Read More</span>
          </div>
          <div className="hero-1">
            <img src={myImage1} alt="myImage1" className='pic3'/>

          </div>
         <div className="icons">
            <img src={myImage2} alt="myImage2" className='heart' /> 
            <div className="value">9.8k</div>
            <img src={myImage3} alt="myImage3" className='message' />
            <div className="value">8.6k</div>
            <img src={myImage4} alt="myImage4" className='shareit'/>
            <div className="value">7.2k</div>
         </div>

       
        </div>
      <div className="card-1">
        <div className="pic-1">
          <img src={myImage5} alt="myImage6" className='pic2'/>
        </div>
      </div>
      
    </div>
  )
}

export default Content
