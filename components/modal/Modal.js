// AdminModal.js

import '@/styles/components/modal.scss'



const Modal = ({ isOpen, onClose, children }) => {




    if (!isOpen) return null;

    return (
        <div className={`admin-modal ${isOpen ? "open" : ""}`}>
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;

