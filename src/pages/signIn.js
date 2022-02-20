import { signin } from "../api/user";
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
                <form id="formSignIn">
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        id="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        id="password"
                        placeholder="Mật Khẩu" />
                    <div class=" pb-2 pl-2 ">
                    </div>

                    <button class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1">Đăng nhập</button>
                </form>

                <div class="text-center text-grey-dark mt-6">
                Bạn chưa có tài khoản
                <a class="no-underline border-b border-blue-200 text-blue-500" href="/signup">
                    đăng ký
                </a>
            </div>
            </div>
        </div>
    </div>
    ${Footer.render()}`;
    },

    afterRender(){
        const formSignIn = document.querySelector('#formSignIn');
        formSignIn.addEventListener('submit', async (e) => {
            e.preventDefault();
            try{
                const response = await signin({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                console.log(response);
                // setItem: input vao storage gom co key:value (key: "user", value la reponse da nhan object.data(lay thg data).user(trong data lay user))
                localStorage.setItem("user", JSON.stringify(response.data.user));
                if(response.data.user.id === 1){
                    window.setTimeout(response ,"3000");
                    document.location.href="/admin/dashboard";
                } else {
                    document.location.href="/";
                }

            } catch (error) {
                console.log(error.response.data); 
            }
        });
    }
};
export default signIn;

// cái này là m ko chạy ra #app
// nên là css nó ko đổ về

