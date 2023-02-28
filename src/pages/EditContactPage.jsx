import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../componets/Form";

function EditContactPage({items, onSave}) {
    const params = useParams();
    const [contact, setContact] = useState([]);

    useEffect(() => {
        setContact(items);
      }, [items]);
      
    let contactAbout = contact.filter(item => item.id === Number(params.contactId));
       
    return ( 
        <Form item={contactAbout} onSave={onSave} title="Editing a contact"/>
     );
}

export default EditContactPage;