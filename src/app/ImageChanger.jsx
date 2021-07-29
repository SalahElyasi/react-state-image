import React from 'react';

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

const getNextIndex = (images, currentIndex) => {
    if (currentIndex === images.length -1) {
        return 0;
    }
    return currentIndex + 1;
}

export class ImageChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageIndex: 0 };

        setInterval(() => {
            this.changeImage();
        }, 3000)
    }

    changeImage() {
        this.setState({
            imageIndex: getNextIndex(images, this.state.imageIndex)
        });
    }


    render() {
        const currentImage = images[this.state.imageIndex];
        return (
            <img src={currentImage.src} alt={currentImage.alt} />
        );
    }
}