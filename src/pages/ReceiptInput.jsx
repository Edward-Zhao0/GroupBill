import React from "react"

const ReceiptInput = () => {
  const [bills, setBills] = React.useState([]);

  function handleSubmit(event) {
  }

  return (
    <div>
      <p>Enter your bill details</p>
      <form onSubmit={handleSubmit}>
        <label>
          Bill Name:
          <input type="text" name="name" placeholder="Plane Fare" required />
        </label>
        <br />
        <label>
          Total Cost:
          <input type="number" name="price" required />
        </label>
        <br />
        <label>
          Number of people:
          <input type="number" name="payers" step="1" min="1" required />
        </label>
        <br />
        <button className="addPerson">+ Add Person</button>
        <button type="submit">Add Bill</button>
        <button className="reset">Reset</button>
      </form>

      <h3>All Bills</h3>

    </div>
  )
}

export default ReceiptInput