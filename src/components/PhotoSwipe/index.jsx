import React, {Component} from 'react';
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
export default class View extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		this.initPreviewer();
	}
	initPreviewer(){
		const selector=this.props.selector||'body';
		const imgs=document.querySelectorAll(selector+" img");
		let list=[];
		Array.prototype.map.call(imgs,(v,i)=>{
			list.push({});//为了防止图片加载先后顺序，先push空值，再修改
			v.onload=()=>{
				list[i]={src:v.src,w:v.width,h:v.height};
				v.onclick=this.previewImg.bind(this,i);
			}
		});
		this.list=list;
	}
	previewImg(index){
		const pswpElement=this.pswp;
		const options = {
			index
		};
		const gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, this.list, options);
		gallery.init();
	}

	render() {
		return (
			<div ref={(t)=>this.pswp=t} className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
				<div className="pswp__bg"> </div>
				<div className="pswp__scroll-wrap">
					<div className="pswp__container">
						<div className="pswp__item"> </div>
						<div className="pswp__item"> </div>
						<div className="pswp__item"> </div>
					</div>

					<div className="pswp__ui pswp__ui--hidden">
						<div className="pswp__top-bar">
							<div className="pswp__counter"> </div>
							<button className="pswp__button pswp__button--close" title="Close (Esc)"> </button>
							<button className="pswp__button pswp__button--fs" title="Toggle fullscreen"> </button>
							<button className="pswp__button pswp__button--zoom" title="Zoom in/out"> </button>
							<div className="pswp__preloader">
								<div className="pswp__preloader__icn">
									<div className="pswp__preloader__cut">
										<div className="pswp__preloader__donut"> </div>
									</div>
								</div>
							</div>
						</div>
						<div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
							<div className="pswp__share-tooltip"> </div>
						</div>
						<button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
						</button>
						<button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
						</button>
						<div className="pswp__caption">
							<div className="pswp__caption__center"> </div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}