import { Link } from "react-router-dom";
import Button from "../componets/Button";
import './ContactsListPage.scss';

function ContactList({items, isOpenModal}) {
   const handleDelete = (event) => {
        const id = event.target.getAttribute('data-delete');
        isOpenModal(id);
   }
    return ( 
        <div>
            {!items.length && <div className="empty">Phone book is empty</div>}
            {!!items.length && (
            <div className="contacts_block container">
                <div>
                    <h2>Name</h2>
                    <ul>
                        {items.map(item => (<li className="list_name" key={item.id}>{item.name}</li>))}
                        
                    </ul>
                </div>
                <div>
                    <h2>Email</h2>
                    <ul>
                        {items.map(item => (<li key={item.id}>{item.email}</li>))}
                    </ul>
                </div>
                <div>
                    <h2>Pnone number</h2>
                    <ul>
                        {items.map(item => (
                        <li key={item.id}>{item.phone}</li>))}
                    </ul>
                </div>
                <div>
                    <h2>Delete contact</h2>
                    <ul className="list_delete">
                        {items.map(item => (
                        <li key={item.id}>
                        <Button value="Delete" className="btn _delete" data={item.id} callback={handleDelete}/>
                        </li>))}
                    </ul>
                </div>
                <div>
                    <h2>Edit contact</h2>
                    <ul className="list_delete">
                        {items.map(item => (
                        <li key={item.id}>
                        <Link to={`/contact/${item.id}`} key={item.id}>
                            <Button value="Edit" className="btn _edit" data={item.id}/>
                        </Link>
                        </li>))}
                    </ul>
                </div>
            </div>
            )}
        </div>
     );
}

export default ContactList;