import React, { Component } from 'react';

import User from './User';

class Users extends Component {
    render() {
        return (
            <div className="Users">
                <h3>Users</h3>
                {this.props.Users.map(user => {
                    return (
                        <User
                            username={user.username}
                            password={user.password}
                            key={user.id}
                        />
                    );
                })}
            </div>
        )
    }
}

export default Users;