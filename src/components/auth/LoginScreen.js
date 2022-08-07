import React from "react";
import './login.css'
import {useForm} from "../../hooks/useForm";
import {useDispatch} from "react-redux";
import {startLogin, startRegister} from "../../actions/auth";
import Swal from "sweetalert2";

export const LoginScreen = () => {
    const loginForm={
        lEmail:'tesdlosssn@gmail.com',
        lPassword:'pasors',
    };
    const registerForm={
        rName:'test1',
        rEmail:'test_1@gmail.com',
        rPassword1:'test12',
        rPassword2:'test12'

    };
    const dispatch=useDispatch()
    const [formLoginValues,handleLoginInputChange]=useForm(loginForm);
    const [formRegisterValues,handleRegisterInputChange]=useForm(registerForm);

    const {rName,rEmail,rPassword1,rPassword2}=formRegisterValues
    const {lEmail,lPassword}=formLoginValues
    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(startLogin(lEmail,lPassword))
    }
    const handleRegister=(e)=>{
        e.preventDefault()
        if(rPassword1!==rPassword2){
            return Swal.fire('error','Passwords must be the same','error')
        }
        dispatch(startRegister(rName,rEmail,rPassword1))
    }
    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="lEmail"
                                value={lEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={lPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rName"
                                value={rName}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                value={rEmail}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="rPassword1"
                                value={rPassword1}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="rPassword2"
                                value={rPassword2}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
