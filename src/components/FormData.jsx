import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function FormData() {
    const [formData, setFormData] = useState([]);
    const [refresh, setRefresh] = useState(1);
    // console.log("data : ", formData);



    useEffect(() => {


        fetch("/form")
            .then(res => res.json())
            .then((data) => {

                // console.log("data from server: ", data);
                setFormData(data);
                showRefreshTime();

            });
    }, [refresh]);





    const showRefreshTime = () => {
        const fixdate = new Date();
        let element = document.getElementById("settingTime");
        element.innerHTML = "Just now";

        setInterval(() => {

            // Calculate minutes
            const minute = 1000 * 60;
            const d = new Date();
            let mins = Math.round((d.getTime() - fixdate.getTime()) / minute);

            if (mins >= 1 && mins <= 59) {
                element.innerHTML = mins + " min ago";
            }

            else if (mins >= 60 && mins <= 1439) {
                let hours = Math.floor(mins / 60);
                element.innerHTML = hours + " hour ago";

            }

            else if (mins >= 1440) {
                let days = Math.floor(mins / 24);
                element.innerHTML = days + " days ago";
            }
            // console.log("min", mins);

        }, 60000);

    }



    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Hamza</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/list">Data List</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="icon-container">
                <h2>Refresh Data  :  &nbsp;
                    <i className="fa fa-refresh myicon"
                        onClick={(e) => {
                            setRefresh(refresh + 1);
                            let check = false;
                            const myrefreshicon = e.target.classList;
                            setTimeout(() => {
                                myrefreshicon.add("fa-spin");
                                check = true;
                                // console.log("inside interval refreshing...")
                            }, 10)
                            setTimeout(() => {
                                if (check === true) {
                                    myrefreshicon.remove("fa-spin");
                                }
                            }, 1200);



                        }}></i>
                </h2>
                <p id="refreshText">Last refresh: <span id="settingTime"></span></p>
            </div>



            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Position</th>
                        <th>Message </th>
                    </tr>
                </thead>
                {(formData.length !== 0) ? // true
                    formData.map((element, index) => {
                        return (
                            <tbody key={index}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.phonenum}</td>
                                    <td>{element.position}</td>
                                    <td>{element.messageDetails}</td>
                                </tr>
                            </tbody>
                        );

                    }) : // false
                    <tbody>
                        <tr>
                            <td colSpan={6}>NO DATA AVAILABLE TO SHOW</td>
                        </tr>
                    </tbody>
                }
            </table>


        </>
    );
}

export default FormData;