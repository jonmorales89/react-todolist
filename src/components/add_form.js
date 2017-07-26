import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class Add extends Component {

    submitForm(vals){
        console.log('Form Submitted',vals)
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <div>
                <Link to="/" className="btn btn-outline-primary my-2">Go Back</Link>
                <h1>Add Item</h1>
                <form onSubmit={handleSubmit((values) => this.submitForm(values))}>
                    <div className="form-group">
                        <label>Title</label>
                        <Field name="title" component="input" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Details</label>
                        <Field name="details" component="input" type="text" className="form-control"/>
                    </div>
                    <button className="btn btn-outline-success">Add Item</button>
                </form>
            </div>
        )
    }
}

Add = reduxForm({
    form: 'add-item'
})(Add);

export default Add;