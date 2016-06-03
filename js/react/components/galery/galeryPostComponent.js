import AjaxComponent from '../base/ajaxComponent';
import GalleryImage from './image';
import Waypoint from 'react-waypoint';
import InifiteScroll from '../infiniteScroll/infiniteScroll';
import Imager from 'imager.js';


export default class GaleryPostComponent extends AjaxComponent {

    constructor(props){
        super(props);
        this.state = {pics:[]};
    }

    componentDidMount(){
        $(".html5lightbox").html5lightbox();
    }

    loadItems = ({callback, page}) => {
        this.loadApi(`galeria/${this.props.galeryId}/${page}`,
            (err, data)=> {
                let { full=false, pics=[] } = data || {};
                if(!err){
                    pics = this.state.pics.concat(pics);
                    this.setState({pics});
                    callback({hasMore:full});
                }
            });
    }


    render(){
        let { pics } = this.state;
        console.log(pics, this.state);
        let images = pics.map((pic) => {
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
                <InifiteScroll loadItemCallback={this.loadItems}>
                {images}
                </InifiteScroll>
            </article>
        )
    }
}
