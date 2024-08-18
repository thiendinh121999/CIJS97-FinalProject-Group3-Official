import '../Home/home.css'
import '../Home/header.css'
import '../Home/footer.css'
import './loginsignup.css'
import Header from '../Home/header'
import Footer from '../Home/footer'

const Signup = () => {
    const handleSignupSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div className="background">
            <div class="signup-container">
                <h1 class="form-head">Đăng ký</h1>
                <form class="login-form" onsubmit="signup()">
                    <input id="username" type="text" placeholder="Tên người dùng" required/>
                    <input id="email" type="email" placeholder="Email" required/>
                    <input id="password" type="password" placeholder="Mật khẩu" required/>
                    <button id="btn-signup" type="submit">Đăng ký</button>
                </form>
                <hr />
                <p class="question">Bạn đã có tài khoản? <a href="./login.html">Đăng nhập.</a></p>
             </div>
        </div>

    )
}
export default Signup