import React from "react";
import { Fragment, useState, useEffect } from "react";

function Upload() {

    const [images, setImages] = useState([]);
    const [imagesURLs, setImagesURLs] = useState([]);

    useEffect(() => {
        setImagesURLs('https://i.ibb.co/bFZLMgd/Food-Fast-For-U.png')
        if (images.length < 1) return;
        const newImageURLs = [];
        images.forEach(images => newImageURLs.push(URL.createObjectURL(images)));
        setImagesURLs(newImageURLs);

    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files])
    }

    console.log("Images : ", images);
    console.log("imageURLs : ", imagesURLs);

    return (
        <Fragment>
            <div>
                <img class="block w-20 h-20 border border-[#E3C67B] rounded-full shadow m-auto mb-2" src={imagesURLs} />
                <input type="file" class="text-[calc(60%+0.8vmin)] rounded bg-[#ECD8A5] file:bg-blue-50 file:mr-5 file:rounded h-10 w-full"
                    multiple accept="image/*" onChange={onImageChange} />   
            </div>
        </Fragment>
    )
}

export default Upload;