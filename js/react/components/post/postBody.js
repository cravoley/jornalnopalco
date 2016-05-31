import React from 'react';
import Util from '../../util';

const imgRegex = /<a.*?(href="(.*?(\.(jpg|png|bmp))")).*?>(<img .*? src="(.*?(\.(.{3})))".*? \/>)<\/a>/gi;


export default class PostComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {modalImage:null, modalDisplay:false};
    }

    html(){
        let { content } = this.props;
        // var img = [];
        // while(img = imgRegex.exec(content)){
        //     let [ match,b,fullImagePath,d,e,f,thumbPath ] = img || [];
        //     let images = [{
        //                 src: 'some image url',
        //                 title: 'image title',
        //                 description: 'image description'
        //             }];
        //             let oi = renderToString(<Modal />);
        //     content = content.replace(match, <Modal>);
        //     console.log(fullImagePath, thumbPath);
        // }
        return {
            "__html": content
        }
    }

    componentDidMount(){
        $(".html5lightbox").html5lightbox();
    }

    render(){
        let data = new Date(this.props.post_date);
        let formatedDate = Util.formatDate(data);
        return(
            <div className="main col-sm-8 col-xs-12">
                <time dateTime={data}>
                    {formatedDate}
                </time>

                <div className="body" dangerouslySetInnerHTML={this.html()} />
            </div>
        )
    }
}
