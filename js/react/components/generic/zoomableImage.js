import React from 'react';


export default class ZoomableImage extends React.Component{

    componentDidMount(){
        $(this.refs.html5lightbox).html5lightbox();
        // console.log(this.refs, this.refs.html5lightbox);

    }

    render(){
        let { thumb, fullImagePath, title } = this.props;
        if(thumb){
            return(
            <a href={fullImagePath?fullImagePath:thumb}
            data-description={title}
            class="html5lightbox imageInside"
            ref="html5lightbox">
                <img class="img-responsive" src={thumb} alt={title} />
                {title && <span class="thumbLabel sr-only">{title}</span>}
            </a>);
        }
        return null;
    }
}
