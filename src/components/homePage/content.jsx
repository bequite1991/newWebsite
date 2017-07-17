import React from 'react';
import { Carousel } from 'antd';
import LazyLoad from 'react-lazyload';

export default class CarouselComponent extends React.Component{
	constructor(props) {
		super(props);
		const imgUrl = ['https://images.apple.com/v/iphone/home/v/images/home/hero_small_2x.jpg',
		    'https://images.apple.com/v/iphone/home/v/images/home/hero_small_2x.jpg',
		    'https://images.apple.com/v/iphone/home/v/images/home/hero_small_2x.jpg',
		    'https://images.apple.com/v/iphone/home/v/images/home/hero_small_2x.jpg',
		    'https://images.apple.com/v/iphone/home/v/images/home/hero_small_2x.jpg',
		    ]
		const imgArr = []
		imgUrl.map((value,index) => {
			let imgEle = (<div key={index}><LazyLoad><img src={value} /></LazyLoad></div>)
			imgArr.push(imgEle);
		})
		this.state = {
		    imgArr:imgArr
		}
	}
	render() {
		const {imgArr} = this.state;
		return(
	      <Carousel autoplay>
	      	{imgArr.map((value,index) => { return value})}
		  </Carousel>
		)
	}
}
