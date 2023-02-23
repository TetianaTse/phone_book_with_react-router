import { useRef, useState } from "react";
import './AddFormPage.scss';
import Button from "../componets/Button";
import { validateContactMail, validateContactName, validateContactPnone } from "../helpers/validator";

function AddForm({ onSave }) {
    const [saveContact, setSaveContact] = useState(false);

    const[errorContactName, setErrorContactName] = useState(false);
    const[errorContactMail, setErrorContactMail] = useState(false);
    const[errorContactPhone, setErrorContactPhone] = useState(false);

    const contactName = useRef('');
    const contactMail = useRef('');
    const contactPhone = useRef('');

    const handleSave = () => {
        const newContactSave = {};
        const contactNameValue = contactName.current.value;
        const isNameValid = validateContactName(contactNameValue);
        let indexSave = 0;
        if(!isNameValid) {
            setErrorContactName(true);
        } else {
            setErrorContactName(false);
            newContactSave.id = Date.now();
            newContactSave.name = contactNameValue;
            indexSave++;
        }

        const contactMailValue = contactMail.current.value;
        const isMailValid = validateContactMail(contactMailValue);
        if(!isMailValid) {
            setErrorContactMail(true);
        } else {
            setErrorContactMail(false);
            newContactSave.email = contactMailValue;
            indexSave++;
        }

        const contactPhoneValue = contactPhone.current.value;
        const isPhoneValid = validateContactPnone(contactPhoneValue);
        if(!isPhoneValid) {
            setErrorContactPhone(true);
        } else {
            setErrorContactPhone(false);
            newContactSave.phone = contactPhoneValue;
            indexSave++;
        }

        if (indexSave === 3) {
            onSave(newContactSave);
            setSaveContact(true);
        }
    }
    return ( 
        <div className="container">
            {!saveContact && (
            <form className="contacts-block_form">
                <h2>Add new contact</h2>
                <p>
                    <input type="text" name="contactName" ref={contactName} placeholder="Name and Surname"/>
                    {errorContactName && <span className="error">Please fill in the name and sername correctly</span>}
                </p>
                <p>
                    <input type="email" name="contactMail" ref={contactMail} placeholder="Email"/>
                    {errorContactMail && <span className="error">Please fill in the mail correctly</span>}
                </p>
                <p>
                    <input type="text" name="contactPhone" ref={contactPhone} placeholder="Pnone number"/>
                    {errorContactPhone && <span className="error">Please fill in the pnone number correctly</span>}
                </p>
                <p>
                    <Button value="Save contact" id="btn_save" callback={handleSave} className="btn _save"/>
                </p>
            </form>)}
            {saveContact && (
                <div className="info_block">Thank you, new contact saved!</div>
            )}
        </div>
     );
}

export default AddForm;