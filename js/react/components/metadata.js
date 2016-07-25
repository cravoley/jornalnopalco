import { Component } from 'react';
import DocMeta from 'react-doc-meta';

import properties from "stores/propertiesStore";

export default class Metadata extends Component {
	constructor(props) {
		super(props);

		this.tags = [];

		let { title, description, image, url, content } = props;

		if (title) {
			this.tags.push({itemProp: "name", content: title},
				{name: "twitter:title", content: title},
				{property: "og:title", content: title}
			);


		}
		this.tags.push(
			{name: "description", content: description},
			{itemProp: "description", content: description},
			{name: "twitter:description", content: description},
			{property: "og:description", content: description}
		);

		if (description) {
		}

		if (!image) {
			let regex = /<img(.*?src="(.*?)".*?)\/>/gim;
			let result;
			if (result = regex.exec(content)) {
				image = result[2];
			} else {
				// fallback
				image = `http://www.jornalnopalco.com.br/wp-content/themes/nopalco/img/facebook/icon.png`;
			}
		}
		this.tags.push(
			{itemProp: "image", content: image},
			{name: "twitter:image", content: image},
			{property: "og:image", content: image});

		if (url) {
			this.tags.push({property: "og:url", content: url});
		}

		//this.tags = [
		//	{name: "description", content: "lorem ipsum dolor"},
		//	{itemProp: "name", content: "The Name or Title Here"},
		//	{itemProp: "description", content: "This is the page description"},
		//	{itemProp: "image", content: "http://www.example.com/image.jpg"},
		//	{name: "twitter:card", content: "product"},
		//	{name: "twitter:site", content: "@publisher_handle"},
		//	{name: "twitter:title", content: "Page Title"},
		//	{name: "twitter:description", content: "Page description less than 200 characters"},
		//	{name: "twitter:creator", content: "@author_handle"},
		//	{name: "twitter:image", content: "http://www.example.com/image.html"},
		//	{name: "twitter:data1", content: "$3"},
		//	{name: "twitter:label1", content: "Price"},
		//	{name: "twitter:data2", content: "Black"},
		//	{name: "twitter:label2", content: "Color"},
		//	{property: "og:title", content: "Title Here"},
		//	{property: "og:type", content: "article"},
		//	{property: "og:url", content: "http://www.example.com/"},
		//	{property: "og:image", content: "http://example.com/image.jpg"},
		//	{property: "og:description", content: "Description Here"},
		//	{property: "og:site_name", content: "Site Name, i.e. Moz"},
		//	{property: "og:price:amount", content: "15.00"},
		//	{property: "og:price:currency", content: "USD"},
		//	{weirdfield: "something", content: "really really cool", hello: "world", meh: "hahaha"}
		//];
		//console.log(this.tags, props);
	}

	render() {
		return <DocMeta tags={this.tags} />;
	}
}
