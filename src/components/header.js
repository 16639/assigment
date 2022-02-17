const Header = {
  render() {
    return /*html */`
        <header class=" w-full bg-white pb-4">
          <div class="bg-gray-100 flex justify-between">
            <div></div>
            <div class="text-black mr-20 my-1">
              <div class="dropdown inline-block relative">
              <button class="text-gray-700 font-semibold py-2 px-6 rounded inline-flex items-center">
                <span class= flex> 
                  <img src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144760.png?token=exp=1644765314~hmac=66caeaa1292d6b6267c35c2da3b67296" alt="" width="25">
                </span>
              </button>
              <ul class="dropdown-content absolute hidden text-gray-700 pt-1">
                <li><a class=" bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="/signin">đăng nhập</a></li>
                <li><a class=" bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" href="/signup">đăng kí</a></li>

                <li><a class=" bg-white hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap" id="logout" href=""> ${localStorage.getItem('user') ? '<button id="logout">đăng xuất</button>' : ""}</a></li>
              </ul>
            </div>
            </div>
          </div>
    
          <div class="flex justify-evenly my-7">
            <div class="logo">
              <a href="/">
                <img src="https://d-themes.com/angular/molla/demo2/assets/images/logo.png" alt="/">
              </a>
            </div>
            <nav>
              <ul>
                <li class="inline-block px-9 font-lg text-xl hover:text-yellow-600 duration-300"><a href="/">Trang chủ</a>
                </li>
                <li class="inline-block px-9 font-lg text-xl hover:text-yellow-600 duration-300"><a href="/products">Sản Phẩm </a>
                </li>
                <li class="inline-block px-9 font-lg text-xl hover:text-yellow-600 duration-300"><a href="/news">Bài Viết</a>
                </li>
                <li class="inline-block px-9 font-lg text-xl hover:text-yellow-600 duration-300"><a href="/contact">Liên Hệ</a></li>
              </ul>
            </nav>
    
            <!-- giỏ hàng -->
            <div class="">
              <ul>
                <li class="inline-block px-4 hover:text-yellow-600 duration-300 "><input class="border border-black pl-1"
                    type="text" id="search" autocomplete="off" placeholder="tìm kiếm..."> <button
                    type="button">Search</button></li>
                <li class="inline-block  hover:text-yellow-600 duration-300 relative"><a href="/cart">Cart<span
                      class="absolute font-lg top-2 left-8 px-2 rounded-full bg-yellow-600 text-white">0</span></a></li>
              </ul>
            </div>
          </div>
        </header>
        `;
  },
  afterRender(){
    const account = document.querySelector('#account');
    const btnLogout = document.querySelector('#logout');
    account.innerHTML = JSON.parse(localStorage.getItem('user')).email;

    btnLogout.addEventListener('click', function(){
       localStorage.removeItem('user');
       alert('Ban da logout thanh cong');
       reRender(Header, "#header");
    })
}
};
export default Header;