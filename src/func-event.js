import React from 'react'

export default function Button(){
    const onClickButtonOK =() =>{
        alert('OK')
    }
    const onClickButtonCancel =() =>{
        alert('Cancel')
    }
    let banner = './image/react.jpg'
    let url = 'http://reactjs.org'
    const bannerClick =() => {
        window.open(url)
    }
    return (
        <>
            <img src={banner} onClick={bannerClick} style={{cursor:'pointer',width:'10%'}}/>
            <button onClick={onClickButtonOK}>OK</button>
            <button onClick={onClickButtonCancel}>Cancel</button>
        </>
    )
}