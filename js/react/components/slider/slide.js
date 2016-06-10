import { Component } from 'react';
import { goToPost } from '../../actions/navigationActions';


export default class Slide extends Component {
    constructor(props){
        super(props);
    }

    navigate = (e) => {
        e.preventDefault();
        let {id, link, title} = this.props;
        goToPost({post:id, link, title});
    }

    render(){
        let categoriesClasses = this.props.categories.map((cat)=>cat.slug).join(" ");
        let categories = this.props.categories.map((cat)=>(<span key={cat.slug} className={cat.slug + " category"}>{cat.name}</span>));

        // this.navigate comes from super class
        return (
            <div class="col-sm-4 cols-xs-6">
                <div className={categoriesClasses+" slide animated slideInRight"}>
                    <img src={this.props.img} />
                    <div className="categories">{categories}</div>
                    <h1>
                        <a onClick={this.navigate} href={this.props.link}>
                        {this.props.title}
                        </a>
                    </h1>
                </div>
            </div>
        );
    }
}
