import { Inertia } from '@inertiajs/inertia'
import React, { useState } from 'react'

export default function Edit() {
  const [values, setValues] = useState({
      id: "",
      user_id: "",
      note: "",
      transportation_costs: "",
      punch_in: "",
      punch_out: "",
      working_time: "",
      break_time: "",
      created_at: "",
      updated_at: ""
  })

  function handleChange(e:any) {
    const key = e.target.id;
    const value = e.target.value
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  function handleSubmit(e:any) {
    e.preventDefault()
    Inertia.post('/attendance/edit', values)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="first_name">出勤:</label>
      <input id="first_name" value={values.punch_in} onChange={handleChange} />
      <label htmlFor="last_name">退勤</label>
      <input id="last_name" value={values.punch_out} onChange={handleChange} />
      <label htmlFor="email">交通費申請</label>
      <input id="email" value={values.transportation_costs} onChange={handleChange} />
      <label htmlFor="email">交通費申請</label>
      <input id="email" value={values.note} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  )
}
