import { Component } from 'react';
import properties from "stores/propertiesStore";
import { Link } from 'react-router';

export default class MovieHolder extends Component{

    link = (target)=>{
        return `${properties.relativeUrl}/cinema/${this.props.params.movie}/${target}`;
    }

    render(){
        // TODO: fetch backend for the movie information.

        let data = {...this.props};
        data.videoId = "u9Dg-g7t2l4";
        data.review = "<div>REVIEW"+
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis suscipit odio, eget lacinia dolor volutpat ac. Donec euismod semper orci, quis interdum dui volutpat eu. Donec ornare lacinia ante sit amet aliquam. Nam at sagittis urna, at vestibulum magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sit amet odio a lorem sagittis fringilla. Nullam eget vehicula felis. Quisque eu rhoncus ipsum. Integer non nisl sagittis purus blandit venenatis a at nisi. Nunc eget erat id turpis pellentesque sagittis. Nam semper viverra pharetra.</p>"+
            "<p>Maecenas nec auctor tellus. Donec congue maximus sapien, nec convallis eros cursus a. Praesent in scelerisque mauris. Fusce sodales elit ac elementum lobortis. Ut sollicitudin neque vel porta facilisis. Sed eu libero diam. Nulla facilisi. Nam mollis ligula vitae urna tempor, bibendum consectetur erat rhoncus. Aliquam egestas lacus tellus. Ut et leo quis diam malesuada sodales. Maecenas vulputate risus quis lacus scelerisque, sit amet fermentum eros pharetra. Pellentesque odio erat, semper quis libero sed, interdum pellentesque augue. Fusce venenatis ullamcorper felis quis efficitur. Nunc pellentesque magna vel justo dignissim tincidunt. Vestibulum sit amet erat non quam rutrum efficitur.</p>"+
            "<p>Nullam eget felis at magna eleifend dictum vitae venenatis arcu. Vestibulum posuere velit in porttitor semper. Sed ullamcorper ligula ac tortor rhoncus, sit amet facilisis mi hendrerit. Maecenas vulputate id dolor quis accumsan. Phasellus vel arcu egestas, mattis mi efficitur, ultrices est. Phasellus in varius nisi. Nullam nisi ligula, finibus at neque eu, consequat auctor arcu. Curabitur quis ultricies arcu. Integer laoreet, quam scelerisque egestas hendrerit, leo magna vehicula nibh, in volutpat tellus ipsum ut dui. Ut blandit dui eget fringilla semper. Vestibulum vel justo vulputate, porttitor turpis vel, placerat ipsum. Nulla pulvinar elementum consequat. Vestibulum bibendum nunc vel eros dictum, quis sagittis mauris vestibulum. Vivamus lorem est, aliquet ac elementum consequat, volutpat vitae arcu. Sed ultrices gravida odio a malesuada. Aenean sit amet enim ut odio aliquet egestas nec a lacus.</p>"+
            "<p>Sed in lacus mi. Vestibulum sollicitudin, elit auctor tristique bibendum, risus dui rutrum lectus, vel aliquet dui tellus at sapien. Duis vel nulla in nulla facilisis faucibus. Nam vitae diam a sapien egestas tempor sit amet sed dui. Proin bibendum metus id metus tristique suscipit. Nam eleifend eu felis pharetra vehicula. Donec semper nisl et nibh iaculis semper. Phasellus neque nisl, tristique vitae eros sed, rutrum suscipit sem. Ut vitae orci in erat tempus porttitor.</p>"+
            "<p>Aliquam molestie tristique sapien, a tempor tellus iaculis in. In hac habitasse platea dictumst. Morbi at est venenatis, hendrerit diam a, efficitur ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ante ante, mattis vel eleifend a, facilisis eu nisi. Sed porttitor, est ut maximus suscipit, nibh ligula eleifend arcu, ac volutpat elit nunc at urna. Suspendisse potenti. Donec posuere lacus enim, vel vestibulum erat faucibus sit amet.</p>"+
        "</div>";
        data.storyline = "<div> STORY"+
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis suscipit odio, eget lacinia dolor volutpat ac. Donec euismod semper orci, quis interdum dui volutpat eu. Donec ornare lacinia ante sit amet aliquam. Nam at sagittis urna, at vestibulum magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sit amet odio a lorem sagittis fringilla. Nullam eget vehicula felis. Quisque eu rhoncus ipsum. Integer non nisl sagittis purus blandit venenatis a at nisi. Nunc eget erat id turpis pellentesque sagittis. Nam semper viverra pharetra.</p>"+
            "<p>Maecenas nec auctor tellus. Donec congue maximus sapien, nec convallis eros cursus a. Praesent in scelerisque mauris. Fusce sodales elit ac elementum lobortis. Ut sollicitudin neque vel porta facilisis. Sed eu libero diam. Nulla facilisi. Nam mollis ligula vitae urna tempor, bibendum consectetur erat rhoncus. Aliquam egestas lacus tellus. Ut et leo quis diam malesuada sodales. Maecenas vulputate risus quis lacus scelerisque, sit amet fermentum eros pharetra. Pellentesque odio erat, semper quis libero sed, interdum pellentesque augue. Fusce venenatis ullamcorper felis quis efficitur. Nunc pellentesque magna vel justo dignissim tincidunt. Vestibulum sit amet erat non quam rutrum efficitur.</p>"+
            "<p>Nullam eget felis at magna eleifend dictum vitae venenatis arcu. Vestibulum posuere velit in porttitor semper. Sed ullamcorper ligula ac tortor rhoncus, sit amet facilisis mi hendrerit. Maecenas vulputate id dolor quis accumsan. Phasellus vel arcu egestas, mattis mi efficitur, ultrices est. Phasellus in varius nisi. Nullam nisi ligula, finibus at neque eu, consequat auctor arcu. Curabitur quis ultricies arcu. Integer laoreet, quam scelerisque egestas hendrerit, leo magna vehicula nibh, in volutpat tellus ipsum ut dui. Ut blandit dui eget fringilla semper. Vestibulum vel justo vulputate, porttitor turpis vel, placerat ipsum. Nulla pulvinar elementum consequat. Vestibulum bibendum nunc vel eros dictum, quis sagittis mauris vestibulum. Vivamus lorem est, aliquet ac elementum consequat, volutpat vitae arcu. Sed ultrices gravida odio a malesuada. Aenean sit amet enim ut odio aliquet egestas nec a lacus.</p>"+
            "<p>Sed in lacus mi. Vestibulum sollicitudin, elit auctor tristique bibendum, risus dui rutrum lectus, vel aliquet dui tellus at sapien. Duis vel nulla in nulla facilisis faucibus. Nam vitae diam a sapien egestas tempor sit amet sed dui. Proin bibendum metus id metus tristique suscipit. Nam eleifend eu felis pharetra vehicula. Donec semper nisl et nibh iaculis semper. Phasellus neque nisl, tristique vitae eros sed, rutrum suscipit sem. Ut vitae orci in erat tempus porttitor.</p>"+
            "<p>Aliquam molestie tristique sapien, a tempor tellus iaculis in. In hac habitasse platea dictumst. Morbi at est venenatis, hendrerit diam a, efficitur ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ante ante, mattis vel eleifend a, facilisis eu nisi. Sed porttitor, est ut maximus suscipit, nibh ligula eleifend arcu, ac volutpat elit nunc at urna. Suspendisse potenti. Donec posuere lacus enim, vel vestibulum erat faucibus sit amet.</p>"+
        "</div>";
        data.cast = "<div> CASTING"+
            "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis suscipit odio, eget lacinia dolor volutpat ac. Donec euismod semper orci, quis interdum dui volutpat eu. Donec ornare lacinia ante sit amet aliquam. Nam at sagittis urna, at vestibulum magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam sit amet odio a lorem sagittis fringilla. Nullam eget vehicula felis. Quisque eu rhoncus ipsum. Integer non nisl sagittis purus blandit venenatis a at nisi. Nunc eget erat id turpis pellentesque sagittis. Nam semper viverra pharetra.</p>"+
            "<p>Maecenas nec auctor tellus. Donec congue maximus sapien, nec convallis eros cursus a. Praesent in scelerisque mauris. Fusce sodales elit ac elementum lobortis. Ut sollicitudin neque vel porta facilisis. Sed eu libero diam. Nulla facilisi. Nam mollis ligula vitae urna tempor, bibendum consectetur erat rhoncus. Aliquam egestas lacus tellus. Ut et leo quis diam malesuada sodales. Maecenas vulputate risus quis lacus scelerisque, sit amet fermentum eros pharetra. Pellentesque odio erat, semper quis libero sed, interdum pellentesque augue. Fusce venenatis ullamcorper felis quis efficitur. Nunc pellentesque magna vel justo dignissim tincidunt. Vestibulum sit amet erat non quam rutrum efficitur.</p>"+
            "<p>Nullam eget felis at magna eleifend dictum vitae venenatis arcu. Vestibulum posuere velit in porttitor semper. Sed ullamcorper ligula ac tortor rhoncus, sit amet facilisis mi hendrerit. Maecenas vulputate id dolor quis accumsan. Phasellus vel arcu egestas, mattis mi efficitur, ultrices est. Phasellus in varius nisi. Nullam nisi ligula, finibus at neque eu, consequat auctor arcu. Curabitur quis ultricies arcu. Integer laoreet, quam scelerisque egestas hendrerit, leo magna vehicula nibh, in volutpat tellus ipsum ut dui. Ut blandit dui eget fringilla semper. Vestibulum vel justo vulputate, porttitor turpis vel, placerat ipsum. Nulla pulvinar elementum consequat. Vestibulum bibendum nunc vel eros dictum, quis sagittis mauris vestibulum. Vivamus lorem est, aliquet ac elementum consequat, volutpat vitae arcu. Sed ultrices gravida odio a malesuada. Aenean sit amet enim ut odio aliquet egestas nec a lacus.</p>"+
            "<p>Sed in lacus mi. Vestibulum sollicitudin, elit auctor tristique bibendum, risus dui rutrum lectus, vel aliquet dui tellus at sapien. Duis vel nulla in nulla facilisis faucibus. Nam vitae diam a sapien egestas tempor sit amet sed dui. Proin bibendum metus id metus tristique suscipit. Nam eleifend eu felis pharetra vehicula. Donec semper nisl et nibh iaculis semper. Phasellus neque nisl, tristique vitae eros sed, rutrum suscipit sem. Ut vitae orci in erat tempus porttitor.</p>"+
            "<p>Aliquam molestie tristique sapien, a tempor tellus iaculis in. In hac habitasse platea dictumst. Morbi at est venenatis, hendrerit diam a, efficitur ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam ante ante, mattis vel eleifend a, facilisis eu nisi. Sed porttitor, est ut maximus suscipit, nibh ligula eleifend arcu, ac volutpat elit nunc at urna. Suspendisse potenti. Donec posuere lacus enim, vel vestibulum erat faucibus sit amet.</p>"+
        "</div>";
        data.movieSessions = {
                updated : "20160516",
                cinemas : [
                    {
                        "name":"Praia de belas",
                        "showTimes":[
                            {
                                "type":"Legendado 3D",
                                "timetable":[
                                    "14:00",
                                    "16:00",
                                    "17"
                                ]
                            },
                            {
                                "type":"Dublado 3D",
                                "timetable":[
                                ]
                            }
                        ]
                    },
                    {
                        "name":"DDDD de belas",
                        "showTimes":[
                            {
                                "type":"Legendado 3D",
                                "timetable":[
                                    "15:00",
                                    "22:00",
                                    "23"
                                ]
                            },
                            {
                                "type":"Dublado 3D",
                                "timetable":[
                                    "18:00",
                                    "19:00",
                                    "20"
                                ]
                            }
                        ]
                    },
                    {
                        "name":"oi",
                        showTimes:[]
                    }
                ]
        };
        let children = React.Children.map(this.props.children, (children)=> {
            return React.cloneElement(children, data);

        });
        return (
            <div>
                <h1>Filme {this.props.params.movie}</h1>
                <Link to={this.link("critica")} activeClassName="active"><button>Critica</button></Link>
                <Link to={this.link("session")} activeClassName="active"><button>Sessões</button></Link>
                <Link to={this.link("sinopse")} activeClassName="active"><button>Sinopse</button></Link>
                <Link to={this.link("ficha")} activeClassName="active"><button>Ficha técnica</button></Link>
                <Link to={this.link("trailer")} activeClassName="active"><button>Trailer</button></Link>
                {children}
            </div>
        );
    }
}
