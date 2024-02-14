import React, { useEffect, useState } from 'react'

const initialFormValues = { fullname: "", phone_number: "" }

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullname: '', phone_number: "" })

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    setForm(initialFormValues)
  }, [contacts])

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    if (form.fullname === "" || form.phone_number === "") {

      return alert("Alanlar bos birakilamaz")
    }

    addContact([...contacts, form])

  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <input name='fullname' placeholder='Fullname' onChange={onChangeInput} value={form.fullname} />
        </div>
        <div>
          <input name='phone_number' placeholder='Phone Number' onChange={onChangeInput} value={form.phone_number} />
        </div>
        <div className="btn">
          <button>Add</button>
        </div>
      </form>
    </>
  )
}

export default Form