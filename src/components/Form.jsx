
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";
function Form() {
    const [text, setText] = useState({
        name: "",
        email: "",
        phonenum: "",
        position: "",
        messageDetails: "",

    });



    const settingText = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setText({ ...text, [name]: value });

    }

    const submit = (e) => {
        e.preventDefault();
        setText({
            name: "",
            email: "",
            phonenum: "",
            position: "",
            messageDetails: "",

        });



        // POST DATA WITH FETCH 

        fetch("/form", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(text)
        })

            .then((result) => {
                alert("Submitted successfully");
                console.log(result)
            })
            .catch((error) => {
                alert("Something went wrong!");
                console.log(error.data)
            });


        // ----------------------


        // POST DATA WITH AXIOS 

        // axios.post("/form", text)
        //     .then((result) => { console.log(result) })
        //     .catch(err => console.log(err.data));

        // -------------------------


    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <Link class="navbar-brand" to="/">Hamza</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/list">Data List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <form className="form-container" onSubmit={submit}>
                <h2>Feedback Form</h2>
                <input type="text" placeholder="Name" name="name" value={text.name} onChange={settingText} required />
                <input type="email" placeholder="Email" name="email" value={text.email} onChange={settingText} required />
                <input type="number" placeholder="Phone No" name="phonenum" value={text.phonenum} onChange={settingText} required />
                <select name="position" value={text.position} onChange={settingText} required>
                    <option value=""></option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="employee">Employee</option>
                </select>
                <textarea name="messageDetails" cols="30" rows="10" placeholder="Your Message..." value={text.messageDetails} onChange={settingText} required></textarea>
                <button className="submitBtn">Submit Form</button>
            </form>

        </>
    );
}

export default Form;