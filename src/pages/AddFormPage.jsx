import Form from "../componets/Form";

function AddForm({ onSave }) {
   
    return ( 
        <Form title="Add new contact" onSave={onSave}/>
     );
}

export default AddForm;