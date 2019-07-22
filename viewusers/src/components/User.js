import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div className="User">
                <p>{this.props.username}</p>
                <p>{this.props.password}</p>
            </div>
        );
    }
}

User.defaultProps = {
    name: '',
    password: ''
}
export default User;