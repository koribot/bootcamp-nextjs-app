// AdminModal.js

import '@/styles/components/modal.scss'



const Modal = ({ isOpen, onClose, closebutton, children, opacity, backgroundColor }) => {
    if (!isOpen) return null;

    return (
        <div className={`admin-modal ${isOpen ? "open" : ""}`}
            style={{ backgroundColor: `rgba(${parseInt(backgroundColor.slice(1, 3), 16)}, ${parseInt(backgroundColor.slice(3, 5), 16)}, ${parseInt(backgroundColor.slice(5, 7), 16)}, ${opacity})`, }}
        >
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    {closebutton ? '\u00D7' : ''}
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;

