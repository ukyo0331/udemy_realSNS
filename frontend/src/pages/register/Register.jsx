import './register.css';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordConfirmation = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(email.current.value);
        // console.log(password.current.value);

        //パスワードと確認用パスワードが合っているかどうかをチェック
        if (password.current.value !== passwordConfirmation.current.value) {
            passwordConfirmation.current.setCustomValidity("パスワードが違います")
        } else {
            try {
                //register APIを叩く
                const user = {
                    username: username.current.value,
                    email: email.current.value,
                    password: password.current.value,
                };
                await axios.post('/auth/register', user);
                navigate('/login');
            } catch (err) {
                console.log(err)
            }
        }
    };
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Real SNS</h3>
                    <span className='loginDesc'>本格的なSNSを自分の手で</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
                        <p className='loginMsg'>新規登録はこちら</p>
                        <input
                            type="text"
                            className='loginInput'
                            placeholder='ユーザー名'
                            required
                            ref={username}
                        />
                        <input
                            type="email"
                            className='loginInput'
                            placeholder='e-mail'
                            required
                            ref={email}
                        />
                        <input
                            type="password"
                            className='loginInput'
                            placeholder='Password'
                            required
                            minLength='6'
                            ref={password}
                        />
                        <input
                            type="password"
                            className='loginInput'
                            placeholder='確認用password'
                            required
                            minLength='6'
                            ref={passwordConfirmation}
                        />
                        <button
                            className="loginButton"
                            type='submit'
                        >サインアップ</button>
                        <button className="loginRegisterButton">ログイン</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Register;