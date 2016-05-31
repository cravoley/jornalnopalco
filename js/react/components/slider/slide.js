import React from 'react';
import Navigable from '../base/navigableComponent';


export default class Slide extends Navigable {
    constructor(props){
        super(props);
    }

    navigate(props){
        let {id, link} = this.props;
        this.props.navigate({id, link});
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
                        <a onClick={this.navigate}>
                        {this.props.title}
                        </a>
                    </h1>
                </div>
            </div>
        );
    }
}
