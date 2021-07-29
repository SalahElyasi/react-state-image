import React from "react";
import { ImageChanger } from "./ImageChanger";

const images = [
    {
        src: 'https://images.freeimages.com/images/large-previews/977/beach-1364350.jpg',
        alt: 'Strand'
    },
    {
        src: 'https://images.freeimages.com/images/large-previews/157/young-and-old-1399297.jpg',
        alt: 'Flowers'
    },
    {
        src: 'https://images.freeimages.com/images/large-previews/b31/butterfly-1392408.jpg',
        alt: 'Butterfly'
    }
]

export class App extends React.Component {
    render() {
        return (
            <ImageChanger images={images} interval={3000} />
        )
    }
}