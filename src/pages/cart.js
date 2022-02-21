import Footer from "../components/footer";
import Header from "../components/header";
import { reRender } from "../utils/rerender";
import { $ } from "../utils/selector";
import { increaseQty,decreaseQty,removeItemInCart } from "../utils/cart";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
const Cart = { 
    render(){
        let cart = [];
        if(localStorage.getItem('cart')){ // lấy từ trong local storage
             cart = JSON.parse(localStorage.getItem('cart'));
        } 
        return /*html */` 
        <div class="max-w-full mx-atuo">
        ${Header.render()}
        <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
          <div class="w-3/4 bg-white px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Giỏ hàng của bạn</h1>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Thông tin sản phẩm</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Số lượng</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Giá tiền</h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Tổng tiền</h3>
            </div>
            ${cart.length > 0 ? cart.map(item => /*html */ `
            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div class="flex w-2/5"> <!-- product -->
                <div class="w-20">
                  <img class="h-24" src="${item.img}" alt="">
                </div>
                <div class="flex flex-col justify-between ml-4 flex-grow">
                  <span class="font-bold text-sm">${item.name}</span>
                  <button data-id="${item.id}" class="btn btn-remove font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                </div>
              </div>
              <div class="flex justify-center w-1/5">
                <button data-id="${item.id}" class="btn btn-decrease ">
                  -
                </button>
                <input class="mx-2 border text-center w-10" type="number" value="${item.quantity}" min="1">

                <button data-id="${item.id}" class="btn btn-increase  ">
                +
                </button>
              </div>
              <span class="text-center w-1/5 font-semibold text-sm">${item.price}</span>
              <span class="text-center w-1/5 font-semibold text-sm">${item.price}</span>
            </div>
            `).join("") : ``}
            <a href="/products" class="flex font-semibold text-indigo-600 text-sm mt-10">
          
              <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
              tiếp tục mua hàng
            </a>
          </div>
    
          <div id="summary" class="w-1/4 px-8 py-10">
            <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div class="border-t mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            </div>
          </div>
    
        </div>
      </div>
      </div>
      ${Footer.render()}`;
    },
    afterRender(){
      $(".btn").forEach(btn => {
          const id = btn.dataset.id;
          btn.addEventListener('click', function(){
              console.log(id);
              if(btn.classList.contains('btn-increase')){
                  increaseQty(id, () => reRender(Cart, "#app"));
              } else if(btn.classList.contains('btn-decrease')){
                  decreaseQty(id, () => reRender(Cart, "#app"));
              } else {
                console.log('remove');
                  removeItemInCart(id, () => {
                      reRender(Cart, "#app");
                      toastr.success("Bạn đã xóa thành công")
                  })
              }
          })
      }) 
    },
};
export default Cart;