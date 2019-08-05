import React, { useState } from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './lightbox.scss';

const LightboxGallery = ({ assets, defaults }) => {
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    let galleryImgActive
    let images

    if (defaults.beforeAfter) {
        images = assets.nodes.reduce((acc, cur) => {
            return acc.concat(
                [
                    imageUrlFor(buildImageObj(cur.beforeImage)).maxWidth(1200).maxHeight(1200).url(),
                    imageUrlFor(buildImageObj(cur.afterImage)).maxWidth(1200).maxHeight(1200).url()
                ]
            )
        }, [])
        galleryImgActive = <img
            src={imageUrlFor(buildImageObj(assets.nodes[0].beforeImage))
                .width(380)
                .height(Math.floor((9 / 16) * 600))
                .url()}
            alt="project gallery"
            onClick={() => setIsOpen(true)}
        />
    } else {
        images = assets.nodes.map(project => imageUrlFor(buildImageObj(project.mainImage)).maxWidth(1200).maxHeight(1200).url())
        galleryImgActive = <img
            src={imageUrlFor(buildImageObj(assets.nodes[0].mainImage))
                .width(380)
                .height(Math.floor((9 / 16) * 600))
                .url()}
            alt="project gallery"
            onClick={() => setIsOpen(true)}
        />
    }
    

    return (
        <div className="lightbox-container">
            <div>
                {galleryImgActive}
            </div>

            {isOpen && (
                <Lightbox
                    animationDisabled={true}
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </div>
    )
}

export default LightboxGallery