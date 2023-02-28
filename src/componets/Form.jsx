import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { validateContactMail, validateContactName, validateContactPnone } from "../helpers/validator";
import Button from "../componets/Button";
import './Form.scss';

function Form(props) {
    const params = useParams();
    const [editName, setEditName] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editPhone, setEditPhone] = useState("");

    const [saveContact, setSaveContact] = useState(false);

    const[errorContactName, setErrorContactName] = useState(false);
    const[errorContactMail, setErrorContactMail] = useState(false);
    const[errorContactPhone, setErrorContactPhone] = useState(false);

    const contactName = useRef('');
    const contactMail = useRef('');
    const contactPhone = useRef('');
    
    useEffect(() => {
        if(props.item) {
        props.item.forEach(element => {
            setEditName(element.name)
            setEditEmail(element.email)
            setEditPhone(element.phone)
            });
        }
      }, [props.item]);
    
    const handleSave = () => {
        const editContactSave = {};
        const contactNameValue = contactName.current.value;
        const isNameValid = validateContactName(contactNameValue);
        let indexSave = 0;
        if(!isNameValid) {
            setErrorContactName(true);
        } else {
            setErrorContactName(false);
            if (params.contactId !== undefined) {
                editContactSave.id = params.contactId;
            } else {
                editContactSave.id = Date.now();
            }
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
            props.onSave(editContactSave);
            setSaveContact(true);
        }
    }
    return ( 
        <div>
        <div className="container">
        {!saveContact && (
        <form className="contacts-block_form">
            <h2>{props.title}</h2>
            <div>
                <p>{editName !== "" ?
                    <input type="text" name="contactName" defaultValue={editName} ref={contactName} placeholder="Name and Surname"/> :
                    <input type="text" name="contactName" ref={contactName} placeholder="Name and Surname"/>}
                    {errorContactName && <span className="error">Please fill in the name and sername correctly</span>}
                </p>
                <p>{editEmail !== "" ?
                    <input type="email" name="contactMail" defaultValue={editEmail} ref={contactMail} placeholder="Email"/> :
                    <input type="email" name="contactMail" ref={contactMail} placeholder="Email"/>}
                    {errorContactMail && <span className="error">Please fill in the mail correctly</span>}
                </p>
                <p>{editPhone !== "" ?
                    <input type="text" name="contactPhone" defaultValue={editPhone} ref={contactPhone} placeholder="Pnone number"/> :
                    <input type="text" name="contactPhone" ref={contactPhone} placeholder="Pnone number"/>}
                    {errorContactPhone && <span className="error">Please fill in the pnone number correctly</span>}
                </p>
                <p>
                    <Button value="Save contact" id="btn_save" callback={handleSave} className="btn _save"/>
                </p>
            </div>
        </form>)}
        {saveContact && (
            <div className="info_block">Thank you, the contact has been changed!</div>
        )}
    </div>
    </div>
    );
}

export default Form;