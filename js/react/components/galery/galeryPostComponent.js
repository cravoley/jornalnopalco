import { Component } from 'react';
import GalleryImage from './image';
import Imager from 'imager.js';


export default class GaleryPostComponent extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        $(".html5lightbox").html5lightbox();
        // new Imager({
        // //         className: 'img-responsive',
        // //         lazyload: true,
        // //         onResize: true
        //     });
    }


    render(){
        let images = this.props.pics.map((pic) => {
            return <GalleryImage
                    key={pic.id}
                    thumb={pic.thumb}
                    title={pic.captionTitle}
                    text={pic.captionText}
                    image={pic.image}
                    />
        });
        return(
            <article>
                <h1>{this.props.title}</h1>
                {images}
            </article>
        )
    }
}
