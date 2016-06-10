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

    // componentDidMount(){
    //     $(".html5lightbox").html5lightbox();
    //     // console.log(this.props.children);
    // }
    //
    // componentDidUpdate(){
    //     console.log("UP", this.props.children);
    // }

    loadItems = ({callback, page}) => {
        this.loadApi(`galeria/${this.props.galeryId}/${page}`,
            (err, data)=> {
                let { full=false, pics=[] } = data || {};
                if(!err){
                    // pics = this.state.pics.concat(pics);
                    // this.setState({pics});
                    callback({hasMore:full, data:pics});
                } else console.log(err);
            });
    }


    render(){
        return(
            <article>
                <h1>{this.props.title}</h1>
                <InifiteScroll loadData={this.loadItems} page={1} messageEmpty="Esta galeria de imagens ainda não possui fotos.">
                    <GalleryImage />
                </InifiteScroll>
            </article>
        )
    }
}
