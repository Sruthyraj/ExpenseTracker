import {useEffect,useState} from 'react';
import {  useNavigate } from 'react-router';
import Form from './Form';
import List from './List';
import './Main.css'
function Main() {

    const navigate=useNavigate();
    const allExpense = localStorage.getItem("expense")
      ? JSON.parse(localStorage.getItem("expense"))
      : [];
  
    const [expense, setExpense] = useState(allExpense);
    const [name, setName] = useState();
    const [amount, setAmount] = useState();
    const handleName = (event) => {
      console.log('Name ', event.target.value)
      setName(event.target.value);
    };
    const handleAmount = (event) => {
      console.log('amount ', event.target.value)
      setAmount(event.target.value);
    };
    const handleSubmitForm = (event) => {
      event.preventDefault();
      if (name !== "" && amount > 0) {
        const ex = { name, amount };
        setExpense([...expense, ex]);
        setName("");
        setAmount("");
      }
      else
      console.log("Invalid Entry")
    }
    useEffect(() => {
      localStorage.setItem("expense", JSON.stringify(expense));
    }, [expense]);
    const handleList=()=>{
        navigate("/list",{state:expense});
    }
  
    return (
      <div className="App">
        <h3 id="id">Expense Tracker</h3>
        <p id='expense'>
          Total Expense:{" "}
          <span id='amount'>
            ${" "}
            {expense.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.amount));
            }, 0)}
          </span>
        </p>
        <Form
          name={name}
          amount={amount}
          handleName={handleName}
          handleAmount={handleAmount}
          handleSubmitForm={handleSubmitForm}
        ></Form>
        <div>
            <p>Click the button the see the Expense list: { " "}<button className='add' onClick={handleList}>+</button></p>
        </div>
        {/* <List expenses={expense}></List> */}
      </div>
    );
  }
  export default Main;