import React from 'react';
import './Menu-item.scss';

 const MenuItem=({title,imageUrl,size})=> (
  <div className={`menu-item ${size}`}>
    <div className="image-background"   style={{
    backgroundImage:`url(${imageUrl})`
  }}>
    </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
  </div>
);

export default MenuItem;