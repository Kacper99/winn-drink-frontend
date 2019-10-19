import React from 'react'

export default (props) => {
    const submitForm = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        props.setServer(event.target[0].value);
        props.history.push('/game')
    };

    return (
        <div className="container h-100">
            <div className="row jumbotron vertical-center justify-content-center">
                <form className="col-12" onSubmit={(event) => submitForm(event)}>
                    <input key="server-id"/>
                    <button type="submit" className="btn btn-outline-light input-button">Submit</button>
                </form>
            </div>
        </div>
    )
}