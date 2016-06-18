import { Component } from 'react';


export default class GalleryImage extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        $(this.refs.html5lightbox).html5lightbox();
        // console.log(this.refs, this.refs.html5lightbox);

    }

    render(){
        let { thumb, title, text, image } = this.props;

        return(
            <div class="col-xs-2 image animated zoomIn">
                <div class="thumb image">
                <a
                    href={image}
                    data-group="gallery"
                    // data-thumbnail={thumb}
                    data-description={title}
                    class="html5lightbox imageInside"
                    ref="html5lightbox">
                    <img class="img-responsive" src={thumb} alt={title} />
                    <span class="thumbLabel sr-only">{title}</span>
                </a>
                </div>
            </div>
        )
    }
}
