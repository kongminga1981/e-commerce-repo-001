import React from 'react';
import './menu-item.style.scss'

const MenuItem = (props) => {
    console.log(props)
    return <div
        style={{backgroundImage : `url(${props.imageUrl})`}}
        className= {`${props.size} menu-item`} >
        <div className='content'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
}

export default MenuItem;
