import React from 'react';
import User from "./User";
import UserConsumer from '../context';

const Users = () => {
  return (
    <UserConsumer>
      {value => {
        const { users } = value;
        return (
          <div>
            {users.map(user => (
              <User
                key={user.id}
                name={user.name}
                salary={user.salary}
                department={user.department}
              />
            ))}
          </div>
        );
      }}
    </UserConsumer>
  );
};

export default Users;
