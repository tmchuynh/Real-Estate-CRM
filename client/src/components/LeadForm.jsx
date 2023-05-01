import React, { useState, useContext } from 'react';
import { AuthContext } from "../authContext";
import { TextField, Autocomplete } from '@mui/material';
import { MultiSelect } from '@mantine/core';
import axios from 'axios';

export default function LeadForm({ onSave, onCancel }) {
  // const { authorizationToken } = useContext(AuthContext);
  const { loggedUserId } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(false);
  const [buying, setBuying] = useState(false);
  const [selling, setSelling] = useState(false);
  const [marketArea, setMarketArea] = useState('');
  const [newLead, setNewLead] = useState({});
  const [errors, setErrors] = useState(false);
  const baseUrl = "localhost:8000/api/leads";
  const statusOptions = [
    { label: 'New Lead', value: 'New Lead' },
    { label: 'Prospect', value: 'Prospect' },
    { label: 'First-Contact', value: 'First-Contact' },
    { label: 'Follow Up', value: 'Follow Up' },
    { label: 'Under Contract', value: 'Under Contract' },
    { label: 'Pending', value: 'Pending' },
    { label: 'Closing', value: 'Closing' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    //try to update db
    axios
      .post(`${baseUrl}/${loggedUserId}`)
      .then(res => {
        //update state if successful db update
        const leadId = res.data._id;
        setNewLead({
            _id: leadId,
            firstName,
            lastName,
            email,
            phoneNumber: phone,
            status,
            isBuying: buying,
            isSelling: selling,
            marketArea,
            agent: loggedUserId
          })
      })
      .catch(err => setErrors(err));
  };
  //CHORE: Update marketAreas into User Model, add to profile and pull options from there
  const [marketAreas, setData] = useState([
    { value: 'North', label: 'North' },
    { value: 'South', label: 'South' },
    { value: 'East', label: 'East' },
    { value: 'West', label: 'West' }
  ]);

  return (
    <form onSubmit={handleSubmit}>
      {errors && <p style={{ color: 'red' }}>{errors}</p>}
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3 form-check">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={statusOptions}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Status" />}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="buying"
          checked={buying}
          onChange={(e) => setBuying(e.target.checked)}
        />
        <label htmlFor="buying" className="form-check-label">
          Buying
        </label>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="selling"
          checked={selling}
          onChange={(e) => setSelling(e.target.checked)}
        />
        <label htmlFor="selling" className="form-check-label">
          Selling
        </label>
      </div>
      <div className="mb-3">
        <MultiSelect
          label="Market Area"
          data={marketAreas}
          placeholder="Select Market Area"
          searchable
          creatable
          maxDropdownHeight={160}
          limit={20}
          radius="lg"
          dropdownPosition="bottom"
          onChange={(e) => {
            marketArea == null ?
            setMarketArea(e.target.value) :
            setMarketArea([...marketArea, e.target.value])
          }}
          error="Pick at least one market area"
          transitionProps={{ duration: 150, transition: 'pop-top-left', timingFunction: 'ease' }}
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => {
            const item = { value: query, label: query };
            setData((current) => [...current, item]);
            return item;
          }}
        />

      </div>
      <button type="submit" className="btn btn-primary me-1">
        Save
      </button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}