import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from '../context';

const User = ({ name, salary, department, id }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClickEvent = () => {
    setIsVisible(prevState => !prevState);
  };

  const onDeleteUser = (dispatch) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  return (
    <UserConsumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <div className='col-md-8 mb-4'>
            <div
              className='card'
              style={isVisible ? { backgroundColor: "#487c90", color: "white" } : null}
            >
              <div className='card-header d-flex justify-content-between'>
                <h4 className='d-inline' onClick={onClickEvent}>
                  {name}
                </h4>
                <i
                  onClick={() => onDeleteUser(dispatch)}
                  className="fa fa-trash-o"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              {isVisible ? (
                <div className='card-body'>
                  <p className='card-text'>Maaş: {salary}</p>
                  <p className='card-text'>Departman: {department}</p>
                </div>
              ) : null}
            </div>
          </div>
        );
      }}
    </UserConsumer>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default User;
