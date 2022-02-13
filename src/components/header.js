const Header = {
  render() {
    return /*html */`
        <header class="fixed w-full bg-white pb-4">
          <div class="bg-gray-200 flex justify-between">
            <div></div>
            <div class="text-black mr-40 my-1">
              <div class="inline-block">
                <a class="hover:text-yellow-600  duration-300" href="/signup">đăng ký</a> | <a
                  class="hover:text-yellow-600 duration-300" href="/signin">đăng nhập</a>
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
                <li class="inline-block px-9 font-lg text-xl hover:text-yellow-600 duration-300"><a href="">Sản Phẩm </a>
                </li>
                <li class="inline-block px-9 font-lg text-xl hover:text-yellow-600 duration-300"><a href="">Bài Viết</a>
                </li>
                <li class="inline-block px-9 font-lg text-xl hover:text-yellow-600 duration-300"><a href="">Liên Hệ</a></li>
              </ul>
            </nav>
    
            <!-- giỏ hàng -->
            <div class="">
              <ul>
                <li class="inline-block px-4 hover:text-yellow-600 duration-300 "><input class="border border-black pl-1"
                    type="text" id="search" autocomplete="off" placeholder="tìm kiếm..."> <button
                    type="button">Search</button></li>
                <li class="inline-block  hover:text-yellow-600 duration-300 relative"><a href="">Cart<span
                      class="absolute font-lg top-2 left-8 px-2 rounded-full bg-yellow-600 text-white">0</span></a></li>
              </ul>
            </div>
          </div>
        </header>
        `;
  },
};
export default Header;