import React from 'react'
import iphonephoto from './iPhone 14.jpg'
import './MainBody.css'
import Watch from './watch.png'
import gift from './gift card.png'
import iphone14left from './iphone14proleft.jpg'
import ipads from './ipads.jpg'

function MainBody() {
  return (
    <div className='mainbody'>
        <div className='iphone14'>
            <h2 className='iphone14'>iPhone 14</h2>
            <h3 className='sentences'>Large and more large.</h3>
            <div><a href='#' className='hrefbros'>Learn more </a> <a className='hrefbros' href='#'>Buy</a></div>
            <img src={iphonephoto}/>
        </div>
        <div className='watch'>
            <h2 className='watchsentences'>WATCH</h2> <br/>
            <h2 className='watchsentencess'>Series 8</h2> <br/>
            <h3 className='watchsentences'>Future. It will feel good. </h3>
            <div className='a'><a href='#' className='hrefbros'>Learn more </a> <a className='hrefbros' href='#'>Buy</a></div>
            <img src={Watch}/>
        </div> 
        <div className='giftcard'>
            <img className='gift' src={gift}/>  
            <br/>
             <h2 className='giftsentence'>Last Change For <br/> Suprise For Your Love</h2> <br/>
             <h3 className='giftsentences'>Gifts bought at the last minute <br/> and talked about for years</h3>
             <div className='a'><a href='#' className='hrefbros'>Shop with new year guide </a> </div>
        </div> 
        <div className='doubles'>
            
            <div className='leftandright'>
                <div className='leftword'>iPhone 14 Pro</div>
                <div className='leftwordd'> More proffesional. Further forward</div>
                <div className='aa'><a href='#' className='hrefbros'>Learn more </a> <a className='hrefbros' href='#'>Buy</a></div>
                <img className='leftandright' src={iphone14left}/>
               
            </div>
            <div className='rightandleft'>
                <div>iPad </div>
                <h3 className='bottomword'>Great colours.Creative illustrations.<br/> Have fun</h3>
                <img className='rightandleft' src={ipads}/>
                
            </div>
        </div>

              
    </div>
  )
}

export default MainBody