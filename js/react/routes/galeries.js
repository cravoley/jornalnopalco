import { Component } from 'react';
import Galeries from 'pages/galeries/galeries'
import GalleryHolder from 'pages/galeries/gallery'

const route = {
    path:"galeria",
    indexRoute:{component:Galeries},
    childRoutes:[
        {
            path:":year/:month/:day/:slug",
            component:GalleryHolder,
        }
    ]
}

export default route;
