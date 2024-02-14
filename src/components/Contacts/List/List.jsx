import React, { useState } from 'react'

function List({ contacts }) {

  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      const value = item[key]
        .toString()
        .toLowerCase()
      return value.includes(filterText.toLowerCase());
    })
  });
  console.log("filtered", filtered)
  return (
    <>
      <input placeholder='Filter contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} />

      <ul className='list'>
        {
          filtered.map((contact, index) => {
            return <li key={index} ><span>{contact.fullname}</span><span>{contact.phone_number}</span></li>
          })
        }
      </ul>
      <p>
Total Contact: {filtered.length}
      </p>
    </>
  )
}

export default List                                                             