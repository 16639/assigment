import Footer from "../components/footer";
import Header from "../components/header";

const signIn = {
    render(){
        return /*html*/ `
        ${Header.render()}
        <div class="bg-gray-100 min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-start justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Đăng Nhập</h1>
                <from id="formSignIn">
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Mật Khẩu" />
                    <div class=" pb-2 pl-2 ">
                    <a class="text-gray-400" href=""> quên mật khẩu</a>
                    </div>

                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
                    >Đăng nhập</button>
                    </from>

                <div class="text-center text-grey-dark mt-6">
                Bạn chưa có tài khoản
                <a class="no-underline border-b border-blue-200 text-blue-500" href="/sigup">
                    đăng ký
                </a>
            </div>
            </div>
        </div>
    </div>
    ${Footer.render()}`;
    },
};
export default signIn