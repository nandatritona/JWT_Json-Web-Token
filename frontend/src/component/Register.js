/* eslint-disable no-unused-vars */
import React,{ useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    
    const [msg, setMsg] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        console.log(name, email, password, confPassword);
    }

    // const Register = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:5000/users', {
    //             name: name,
    //             email: email,
    //             password: password,
    //             confPassword: confPassword
    //         });
    //         history.push('/'); // Redirect to login page bos que :)
    //     } catch (error) {
    //         if(error.response) {
    //             console.log(error.response.data);
    //             // setMsg(error.response.data.msg);
    //         }
    //     }
    // }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4-desktop">
                            <form onSubmit={ Register } className="box">
                                <div className="field mt-5">
                                    <label className="label">Name</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Email</label>
                                    <div className="controls">
                                        <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Password</label>
                                    <div className="controls">
                                        <input className="input" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <label className="label">Confirm Password</label>
                                    <div className="controls">
                                        <input className="input" placeholder="********" value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button className="button is-success is-fullwidth">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
