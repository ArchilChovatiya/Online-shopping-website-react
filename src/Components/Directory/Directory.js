import React, { Component } from 'react';
import './Directory.scss';
import MenuItem from '../Menu-item/Menu-item'

class Directory extends Component {

  constructor(){
    super();
    this.state={
      sections:[
        {
          title:'HATS',
          imgUrl:'https://i.ibb.co/cvpntL1/hats.png',
          id: 1
        },
        {
          title:'JACKETS',
          imgUrl:'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title:'SNEAKERS',
          imgUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title:'WOMEN',
          imgUrl:'https://i.ibb.co/GCCdy8t/womens.png',
          id: 4 ,
          size: 'large'
        },
        {
          title:'MEN',
          imgUrl:'https://i.ibb.co/R70vBrQ/men.png',
          id: 5 ,
          size: 'large'
        }
      ]
    };
  }

render(){
  return (
    <div className="directory-menu"> 
    {
      this.state.sections.map( ({title,id,imgUrl ,size})=> < MenuItem key={id} title={title} imageUrl={imgUrl} size={size} />)
    }
    
      
    </div>
      );
}

}


export default Directory;