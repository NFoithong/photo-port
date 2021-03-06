import React from 'react';

function Modal({onClose, currentPhoto}) {

    const {name, category, description, index} = currentPhoto;

    return (
        // jsx
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                <button onClick={onClose} type="button" id="btn">Close this modal</button>
            </div>
        </div>
    );
}

export default Modal;