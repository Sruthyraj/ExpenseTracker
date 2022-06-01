import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import"./List.css";
function List() {
  const location = useLocation();
  return (
    <div className="form">
     <Link className="link" to="/"> Back To Home</Link>
     <h3 class="form-label">Expenses</h3>
      <ul class="list-group">
        {location.state.map((item) => (
          <li class="list-group-item d-flex justify-content-between align-items-center">
            {item.name}
            <span class="badge bg-primary rounded-pill">{item.amount}</span>
          </li>
        ))}
      </ul>

      {/* <h1>hello</h1>
            {location.state.map(item =>(
                <div key={item.id}>
                    {item.name} -{item.amount}
                </div>
            ))} */}
    </div>
  );
}

export default List;
