import React, { useState } from "react";

function AddContactForm({ onAdd }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "The first name is required";
    if (!form.lastName.trim()) newErrors.lastName = "The last name is required";
    if (!form.phone.trim()) newErrors.phone = "The phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    onAdd(form);
    setForm({ firstName: "", lastName: "", phone: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={form.firstName}
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />
      {errors.firstName && <p>{errors.firstName}</p>}

      <input
        type="text"
        placeholder="Last Name"
        value={form.lastName}
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />
      {errors.lastName && <p>{errors.lastName}</p>}

      <input
        type="text"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      {errors.phone && <p>{errors.phone}</p>}

      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContactForm;
