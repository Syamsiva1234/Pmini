import React, { useState } from 'react'
import { addUser } from '../Service/api'
import { v4 as uuid } from 'uuid'
import './EventPage.css'

const EventPage = () => {

    let [state, setState] = useState({
        username: "",
        email: "",
        contact: ""
    })
    let [errState, setErrState] = useState({
        username_err_msg: "",
        email_err_msg: "",
        contact_err_msg: "",
    })

    let { username, email, contact } = state
    let { username_err_msg, email_err_msg, contact_err_msg } = errState

    function myFunction() {
        alert("Data submited sucessfully!");
    }

    let clearForm = () => {
        setState({
            username: "",
            email: "",
            contact: "",
        })
        setErrState({
            username_err_msg: "",
            email_err_msg: "",
            contact_err_msg: "",
        })
    }

    function formValidation(event) {
        let result;
        // regex pattern for phone number
        const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;
        const re_username = /^[A-Za-z0-9_]+$/g;
        const re_email = /^\S+@\S+\.\S+$/g;
        console.log(event.target.name);
        // check if the phone number is valid
        if (event.target.name == "contact") {
            result = contact.match(re)
            if (result) {
                console.log("Matched contact EXpression");
                setErrState({
                    ...errState,
                    contact_err_msg: "",
                })
            } else {
                setErrState({
                    ...errState,
                    contact_err_msg: "Please Enter valid Contact Number",
                })
                console.log("Contact error msg SET");
            }
        }
        if (event.target.name == "username") {
            console.log(username + "username..>");
            result = username.match(re_username)
            console.log(result);
            if (result) {
                setErrState({
                    ...errState,
                    username_err_msg: "",
                })
                console.log("Matched username EXpression");
            }
            else {
                setErrState({
                    ...errState,
                    username_err_msg: "Please Enter valid username",
                })
                console.log("Invalid username FORMAT, err msg set");
            }
        }
        if (event.target.name == "email") {
            result = email.match(re_email)
            if (result) {
                setErrState({
                    ...errState,
                    email_err_msg: "",
                })
                console.log("Matched email EXpression");
            }
            else setErrState({
                ...errState,
                email_err_msg: "Please Enter valid Mail",
            })
        }
    }

    let changeHandler = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
    }

    const addUserDetails = async () => {
        const unique_id = uuid()
        const small_id = unique_id.slice(0, 8)
        state["id"] = small_id
        await addUser(state);
        // history.push('/all');
        console.log("user added SUCCESSFULLY" + state["id"])
        clearForm()
    }

    let submitHandler = (event) => {
        event.preventDefault()
        if (username_err_msg.length == 0 && contact_err_msg.length == 0 && email_err_msg.length == 0) {
            console.log("No errors");
            console.log(state);
            addUserDetails()
        }
        // console.log(state);
        // console.log(errState);
    }

    return (
        <div className='container mt-4' >
            <h3 className='text-white' style={{
                fontFamily: "sans-serif", fontWeight: 600
            }}>RWD</h3>
            <p className='labelEvent transparent'> Submit your details to get event updates</p>
            <form onSubmit={submitHandler} >
                <div className='container'>
                    <div className='row'>
                        <label className='labelEvent ' htmlFor='uname'>User Name</label>
                        <input type='text' onBlur={formValidation} required onChange={changeHandler} name='username' value={username} className='form-control inputEvent' id='exampleInputEmail1' aria-describedby='emailHelp' ></input>
                        <p className='mt-2 text-danger'>{username_err_msg}</p>
                    </div>
                    <div className='row'>
                        <label className='labelEvent' htmlFor='upass'>Email Address</label>
                        <input type='email' onBlur={formValidation} required onChange={changeHandler} name='email' value={email} className='inputEvent form-control' id='exampsword1'></input>
                        <p className='mt-2 text-danger'> {email_err_msg}</p>

                    </div>
                    <div className='row'>
                        <label className='labelEvent' htmlFor='ucontac'>Contact Number</label>
                        <input type='text' required onBlur={formValidation} onChange={changeHandler} name='contact' value={contact} className='inputEvent form-control' id='ePassword1'></input>
                        <p className='mt-2 text-danger'>{contact_err_msg}</p>

                    </div>
                    <div className='row'>
                        <button type='reset' id='ton2' onClick={clearForm} className='btn borderThick border-white  m-2  col'>Clear</button>
                        <button type='submit' id='ton' onClick={myFunction} className='btn borderThick border-white m-2 col'>Submit</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default EventPage;
