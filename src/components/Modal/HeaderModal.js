import React from 'react';
import Modal from 'react-modal';


const HeaderModal=props=>{

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
 
    return (
            <Modal
                isOpen={props.modalIsOpen}
                // onAfterOpen={afterOpenModal}
                ariaHideApp={false}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Login"
            >
                {props.children}
            </Modal>
    )

}

export default HeaderModal; 