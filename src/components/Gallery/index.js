import React from "react";
// import capitalizeFirstLetter from utils folder
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from '../../assets/small/commercial/0.jpg';
import PhotoList from "../PhotoList";

function Gallery({props}) {

    const { currentCategory } = props;

    // const { name, description } = currentCategory

    // const currentCategory = {
    //     name: 'commercial',
    //     description: 'Photos of grocery stroes, food trucks, and other commercial projects',
    // };
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
                {/* <img
                    src={photo}
                    alt='Commercial Example'
                    className='img-thumbnail mx-1'
                />
            </PhotoList> */}
        </section>
    );
}

export default Gallery;