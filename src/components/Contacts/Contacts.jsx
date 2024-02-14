import React, { useEffect, useState } from 'react'
import List from './List/List'
import Form from './Form/Form'
import "./styles.css"
function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Ozcan",
            phone_number: "0555 555 55 55"
        },
        {
            fullname: "Mehmet",
            phone_number: "0555 555 55 55"
        }
    ])

    useEffect(()=>{
        console.log(contacts);
    },[contacts])
    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List contacts = {contacts}/>
            <Form  addContact = {setContacts} contacts = {contacts}/>
        </div>

    )
}

export default Contacts