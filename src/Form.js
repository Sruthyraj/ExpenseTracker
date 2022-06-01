import { useState } from "react";
import React from "react";
import "./Form.css"
import { NavLink } from "reactstrap";


function Form({name, amount, handleName, handleAmount, handleSubmitForm}) {

  
  
  return (
    
    <div className="form">
      
      <form onSubmit={handleSubmitForm}>
        <div class="mb-3">
          <label class="form-label">Item Name</label>
          <input class="form-control" placeholder="Enter the item Name" onChange={handleName} value={name} />
        </div>
        <div class="mb-3">
          <label class="form-label">Expense</label>
          <input class="form-control" placeholder="Enter the Expense" onChange={handleAmount} value={amount} />
        </div>

        <button type="submit" className="submit">
          Add
        </button>

        {/* <label>Expenses:</label>
    <input name="name" value={name} onChange={handleName}></input>
    <br />
    <br /> <label>Amount:</label>
    <input name="amount" value={amount} onChange={handleAmount}></input>
    <button type="submit">Add</button> */}
      </form>
    </div>
  );
}

export default Form;
