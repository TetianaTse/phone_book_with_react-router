import { useParams } from "react-router-dom";
// import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import { validateContactMail, validateContactName, validateContactPnone } from "../helpers/validator";
import Button from "../componets/Button";

function EditContactPage({items, onSave}) {
    const params = useParams();
    const [contact, setContact] = useState([]);

    const [saveContact, setSaveContact] = useState(false);

    const[errorContactName, setErrorContactName] = useState(false);
    const[errorContactMail, setErrorContactMail] = useState(false);
    const[errorContactPhone, setErrorContactPhone] = useState(false);

    const contactName = useRef('');
    const contactMail = useRef('');
    const contactPhone = useRef('');

    useEffect(() => {
        setContact(items);
      }, [items]);
    let contactAbout = contact.filter(item => item.id === Number(params.contactId));
    
    const handleSave = () => {
        const editContactSave = {};
        const contactNameValue = contactName.current.value;
        const isNameValid = validateContactName(contactNameValue);
        let indexSave = 0;
        if(!isNameValid) {
            setErrorContactName(true);
        } else {
            setErrorContactName(false);
            editContactSave.id = params.contactId;
            editContactSave.name = contactNameValue;
            indexSave++;
        }

        const contactMailValue = contactMail.current.value;
        const isMailValid = validateContactMail(contactMailValue);
        if(!isMailValid) {
            setErrorContactMail(true);
        } else {
            setErrorContactMail(false);
            editContactSave.email = contactMailValue;
            indexSave++;
        }

        const contactPhoneValue = contactPhone.current.value;
        const isPhoneValid = validateContactPnone(contactPhoneValue);
        if(!isPhoneValid) {
            setErrorContactPhone(true);
        } else {
            setErrorContactPhone(false);
            editContactSave.phone = contactPhoneValue;
            indexSave++;
        }

        if (indexSave === 3) {
            onSave(editContactSave);
            setSaveContact(true);
        }
    }

    return ( 
        <div>
            <div className="container">
            {!saveContact && (
            <form className="contacts-block_form">
                <h2>Editing a contact</h2>
                {contactAbout.map(item => (
                <div key={item.id}>
                    <p>
                        <input type="text" name="contactName" defaultValue={item.name} ref={contactName} placeholder="Name and Surname"/>
                        {errorContactName && <span className="error">Please fill in the name and sername correctly</span>}
                    </p>
                    <p>
                        <input type="email" name="contactMail" defaultValue={item.email} ref={contactMail} placeholder="Email"/>
                        {errorContactMail && <span className="error">Please fill in the mail correctly</span>}
                    </p>
                    <p>
                        <input type="text" name="contactPhone" defaultValue={item.phone} ref={contactPhone} placeholder="Pnone number"/>
                        {errorContactPhone && <span className="error">Please fill in the pnone number correctly</span>}
                    </p>
                    <p>
                        <Button value="Save contact" id="btn_save" callback={handleSave} className="btn _save"/>
                    </p>
                </div>
                ))}
            </form>)}
            {saveContact && (
                <div className="info_block">Thank you, the contact has been changed!</div>
            )}
        </div>
        </div>
     );
}

export default EditContactPage;