import React, { useState } from 'react';
import posed from 'react-pose';
import UserConsumer from '../context';
import uniqid from 'uniqid';

const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block"
    }
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none"
    }
  }
});

const AddUser = () => {
  const [visible, setVisible] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const changeVisibility = () => {
    setVisible(!visible);
  };

  const changeInput = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value
    });
  };

  const addUser = (dispatch, e) => {
    e.preventDefault();
    const { name, department, salary } = userInput;
    const newUser = {
      id: uniqid(),
      name,
      salary,
      department
    };
    // Use dispatch instead of dispatchEvent
    dispatch({ type: "ADD_USER", payload: newUser });
  };

  return (
    <UserConsumer>
      {value => {
        const { dispatch } = value;
        return (
          <div className='col-md-8 mb-4'>
            <div className='form-group col-md-12'>
              <button onClick={changeVisibility} className='btn btn-dark btn-block mb-2' style={{ width: '100%' }}>{visible ? "Hide Form" : "Show Form"}</button>
            </div>
            <Animation pose={visible ? "visible" : "hidden"}>
              <div className='card'>
                <div className='card-header'>
                  <h4>Add User Form</h4>
                </div>
                <div className='card-body px-5'>
                  <form onSubmit={(e) => addUser(dispatch, e)}>
                    <div className='row justify-content-center'>
                      <div className='form-group mt-3'>
                        <label htmlFor="id">Name:</label>
                        <input type='text' name='name' id='id' placeholder='Enter Name' className='form-control' value={userInput.name} onChange={changeInput} />
                      </div>
                      <div className='form-group mt-3'>
                        <label htmlFor="department">Department:</label>
                        <input type='text' name='department' id='department' placeholder='Enter Department' className='form-control' value={userInput.department} onChange={changeInput} />
                      </div>
                      <div className='form-group mt-3'>
                        <label htmlFor="salary">Salary:</label>
                        <input type='text' name='salary' id='salary' placeholder='Enter Salary' className='form-control' value={userInput.salary} onChange={changeInput} />
                      </div>
                      <div className='form-group mt-4 col-md-12'>
                        <button type='submit' className='btn btn-danger btn-block' style={{ width: '100%' }}>Add User</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Animation>
          </div>
        );
      }}
    </UserConsumer>
  );
}

export default AddUser;
