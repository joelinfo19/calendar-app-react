import React from "react";
import './login.css'

export const LoginScreen=()=>{
    return (
        <div className="form-input-flex">
            <form className="flex-form">
                <div className=" ">
                    <label className="text" htmlFor="exampleInputEmail1">Email address</label>
                    <input className="box" type="text" />
                </div>

                <div>
                    <label className="text" htmlFor="exampleInputEmail1">Password</label>
                    <input className="box" type="text"/>
                </div>
                <button className="login">
                    log in
                </button>
            </form>

            {/*<form >*/}
            {/*    <div className="form-input">*/}
            {/*        <label htmlFor="exampleInputEmail1">Email address</label>*/}
            {/*        <input className="input-center" type="text"/>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        <label htmlFor="exampleInputEmail1">Password</label>*/}
            {/*        <input className="input-center-in" type="text"/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <label htmlFor="exampleInputEmail1">Repeat password</label>*/}
            {/*        <input className="input-center-in" type="text"/>*/}
            {/*    </div>*/}

            {/*</form>*/}
            {/*<button>*/}
            {/*    Register*/}
            {/*</button>*/}

        </div>
    )
}
