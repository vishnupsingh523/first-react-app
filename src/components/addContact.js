import React from 'react';

class addContact extends React.Component{
    render(){
        return (
            <div className = "ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className = "field">
                        <label >Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className = "field">
                        <label >Name</label>
                        <input type="text" name="name" placeholder="Field" />
                    </div>
                    <button className="ui button blue" type="submit">Add</button>
                </form>
            </div>
        )
    }
}
export default addContact;