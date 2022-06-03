import React from "react";
import './login.css'

export const LoginScreen=()=>{
    return (
        <div >
            <form >
                <div className="form-input">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input className="input-center" type="text"/>
                </div>

                <div>
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input className="input-center-in" type="text"/>
                </div>

            </form>
            <button>
                log in
            </button>
            <form >
                <div className="form-input">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input className="input-center" type="text"/>
                </div>

                <div>
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input className="input-center-in" type="text"/>
                </div>
                <div>
                    <label htmlFor="exampleInputEmail1">Repeat password</label>
                    <input className="input-center-in" type="text"/>
                </div>

            </form>
            <button>
                Register
            </button>

        </div>
    )
}
