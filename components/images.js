import React, { useEffect, useState, useRef } from 'react';

export default function Images({src, alt}) {

    const [currentImage, setCurrentImage] = useState(0);
    const imageRef = useRef(currentImage);
    imageRef.current = currentImage;

    let timer = null;

    /**
     * Rotate images
     */
    let nextImage = () => {

        if(imageRef.current + 2 > src.length) {
            setCurrentImage(0);
        } else {
            setCurrentImage(imageRef.current + 1);
        }


    };


    useEffect(() => {

        /**
         * Rotate images every 3 seconds
         */
        clearTimeout(timer);
        timer = setTimeout(nextImage, 3000);

        return () => clearTimeout(timer);

    }, [currentImage]);


    return (
        <img src={src[currentImage]} alt={alt} />
    );
}
