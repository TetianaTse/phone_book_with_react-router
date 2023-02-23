import Button from "./Button";
import './Modal.scss';

function Modal({onClose, onDelete}) {
    const handleCancel = () => {
        onClose();
    }
   
    const handleDelete = () => {
        onDelete();
    }
    
    return ( 

        <div id="popup" className="popup">
            <div className="popup_block">
                <div className="popup_content">
                    <p className="popup_text">Are you sure you want to delete this contact?</p>
                    <Button value="Cancel" id="popup_cancel" callback={handleCancel} className="btn popup_cancel"/>
                    <Button value="Delete" id="popup_delete" callback={handleDelete} className="btn popup_delete"/>
                </div>
            </div>
        </div>                 
     );
}

export default Modal;