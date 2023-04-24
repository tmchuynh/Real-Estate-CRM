import { useState } from 'react';

function LeadForm({ onSave, onCancel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(false);
  const [buying, setBuying] = useState(false);
  const [selling, setSelling] = useState(false);
  const [marketArea, setMarketArea] = useState('');

  /* 
**** These vars needed to query db with col sorting ****
**** Store bool for if user wants to sort that col  ****
**** if bool needs to append the query with a sort  ****
**** of the corresponding name                      ****
*/
  // const baseUrl = "localhost:8000/api/leads";
  // const [sortName] = useState(false);
  // const [sortEmail] = useState(false);
  // const [sortPhone] = useState(false);
  // const [sortStatus] = useState(false);

  //query to grab the leads
  //if filters, query needs operators to grab the filtered results
  // useEffect(() => {
  //     //Bool && query the router with the sort by that col
  //     sortName && axios.get(`${BaseUrl}/name`)
  //         .then(results => setTableData(results)
  //         .catch(err => {
  //             const errData = err.message.errors;
  //             //map the errors to display

  //         })

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name,
      email,
      phone,
      status,
      buying,
      selling,
      marketArea,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
        <input
          type="checkbox"
          className="form-check-input"
          id="status"
          checked={status}
          onChange={(e) => setStatus(e.target.checked)}
        />
        <label htmlFor="status" className="form-check-label">
          Status
        </label>
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
        <label htmlFor="marketArea" className="form-label">
          Market Area
        </label>
        <input
          type="text"
          className="form-control"
          id="marketArea"
          value={marketArea}
          onChange={(e) => setMarketArea(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
      <button type="button" className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}
export default LeadForm;