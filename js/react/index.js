import React from 'react';
import { render } from 'react-dom';
import Slider from './components/slider/slider';
import Post from './components/post/post';


if(configuration){
    if(configuration.isSingle == "true"){
        render(<Post id={configuration.id} />, document.getElementById("content"));
    }
}
// render(<Slider layout="cover" />, document.getElementById("content"));
