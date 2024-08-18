import '../Home/home.css'
import '../Home/header.css'
import '../Home/footer.css'
import './loginsignup.css'
import Header from '../Home/header'
import Footer from '../Home/footer'

const Login = () => {
    const handleLoginSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div className="background">
            <div class="login-container">
                <h1 class="form-head">Đăng nhập</h1>
                <form class="login-form" onSubmit={handleLoginSubmit}>
                    <input id="username" type="text" placeholder="Tên người dùng" required/>
                    <input id="email" type="email" placeholder="Email" required/>
                    <input id="password" type="password" placeholder="Mật khẩu" required/>
                    <button id="btn-login" type="submit">Đăng nhập</button>
                </form>
                <hr />
                <p class="question">Bạn chưa là thành viên? <a href="#">Đăng ký ngay!</a></p>
            </div>
        </div>

    )
}
export default Login