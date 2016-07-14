import { Component } from 'react';
import Galeries from 'pages/galeries/galeries'
import GalleryHolder from 'pages/galeries/galleryHolder'
import Gallery from 'pages/galeries/gallery'

const route = {
    path:"galeria",
    indexRoute:{component:Galeries},
    component: GalleryHolder,
    childRoutes:[
        {
            path:":year/:month/:day/:slug",
            component:Gallery,
        }
    ]
}

export default route;
