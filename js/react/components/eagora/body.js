import React from 'react';
import Util from '../../util';

const imgRegex = /<a.*?(href="(.*?(\.(jpg|png|bmp))")).*?>(<img .*? src="(.*?(\.(.{3})))".*? \/>)<\/a>/gi;


export default class PostComponent extends React.Component{

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
        let { video, thumb } = this.props;

        let player;        
        if(thumb){
            player = <img src={thumb} />;
        } else {
            player = <img src={`${this.props.templateUrl}/img/layout/video/player.jpg`} />;
        }



        return(
            <div className="main col-sm-8 col-xs-12">
                <time dateTime={data}>
                    {formatedDate}
                </time>
                <div class="image">
                    <a target="_blank" class="html5lightbox imageInside" href={video}>
                        {player}
                    </a>
                </div>

                <div className="body" dangerouslySetInnerHTML={this.html()} />
            </div>
        )
    }
}
