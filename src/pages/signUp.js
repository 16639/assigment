import {signup} from "../api/user"
import Footer from "../components/footer";
import Header from "../components/header";

const signUp = {
    render(){
        return /*html*/ `
        ${Header.render()}
        <div class="bg-gray-100 min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Đăng Ký</h1>
                <form id="formSignUp">
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        id="username"
                        placeholder="Họ và tên" />

                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        id="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        id="password"
                        placeholder="Mật khẩu " />

                    <button
                        class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                    >Đăng ký</button>
                </form>
                <div class="text-center text-sm text-grey-dark mt-4">
                    Bạn đã có tài khoản
                    <a class="no-underline border-b border-blue-500 text-grey-dark text-blue-500" href="/signin">đăng nhập</a>
                </div>
            </div>
        </div>
    </div>
    ${Footer.render()}`
    },
    afterRender(){
        const formSignup = document.querySelector('#formSignUp');
        formSignup.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const response = await signup({
                    username: document.querySelector('#username').value,
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                console.log(response);
                alert( "đăng ký thành công");
                document.location.href="/signin";

            } catch (error) {
                console.log(error.response.data);
                alert(error.response.data);
            }
        });
    }
};
export default signUp;