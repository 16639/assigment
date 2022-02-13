import Header from "../components/header";
import Footer from "../components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Product = {
    render(){
        return /*html */ `
        ${Header.render()}
        <div class="bg-white">
        <div class="w-10/12 mx-auto py-16 px-4 ">
          
      
          <div class=" flex justify-around">
            <div class="w-1/6">
              <h2 class="font-semibold text-xl py-4">Danh Mục</h2>
              <div class="flex justify-between ">
                <div>
                    <a href="" >
                    <p>áo khoác</p>
                    <p>áo dài</p>
                    <p>áo polo</p>
                    <p>quần</p>
                    </a>
                </div>
                <div class="pr-5">
                    <p>1</p>  
                    <p>2</p>  
                    <p>1</p>  
                    <p>1</p>  
              </div>
              </div>
              <h2 class="font-semibold text-xl py-4">Size</h2>
            </div>
            <div>
              <h2 class="font-semibold text-xl py-4">Products</h2>
            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <div class="product" data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500">
                <div class="item">
                  <a href=""><img
                      src="https://product.hstatic.net/1000026602/product/img_3530_2cb0ab0496bb45428a5a6de77c231af9_large.jpg"
                      alt="" width="280" height="370"></a>
                </div>
                <div class="overlay">
                  <div class="title-price text-black">
                    <a href="" class="text-xl">Quần áo nam</a>
                    <span class="py-3 text-xl text-red-600 ">100.000đ</span>
                    <span class="pt-3 font-light line-through text-gray-300">200.000đ</span>
                    <button type="button"
                      class="px-2 py-2 text-white border border-solid border-black bg-black text-whtie hover:text-red-500">ADD
                      TO CARD</button>
                  </div>
                </div>
              </div>
              <div class="product" data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500">
                <div class="item">
                  <a href=""><img
                      src="https://product.hstatic.net/1000026602/product/img_3530_2cb0ab0496bb45428a5a6de77c231af9_large.jpg"
                      alt="" width="280" height="370"></a>
                </div>
                <div class="overlay">
                  <div class="title-price text-black">
                    <a href="" class="text-xl">Quần áo nam</a>
                    <span class="py-3 text-xl text-red-600 ">100.000đ</span>
                    <span class="pt-3 font-light line-through text-gray-300">200.000đ</span>
                    <button type="button"
                      class="px-2 py-2 text-white border border-solid border-black bg-black text-whtie hover:text-red-500">ADD
                      TO CARD</button>
                  </div>
                </div>
              </div>
              <div class="product" data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500">
                <div class="item">
                  <a href=""><img
                      src="https://product.hstatic.net/1000026602/product/img_3530_2cb0ab0496bb45428a5a6de77c231af9_large.jpg"
                      alt="" width="280" height="370"></a>
                </div>
                <div class="overlay">
                  <div class="title-price text-black">
                    <a href="" class="text-xl">Quần áo nam</a>
                    <span class="py-3 text-xl text-red-600 ">100.000đ</span>
                    <span class="pt-3 font-light line-through text-gray-300">200.000đ</span>
                    <button type="button"
                      class="px-2 py-2 text-white border border-solid border-black bg-black text-whtie hover:text-red-500">ADD
                      TO CARD</button>
                  </div>
                </div>
              </div>
              <div class="product" data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-offset="500"
                                    data-aos-duration="500">
                <div class="item">
                  <a href=""><img
                      src="https://product.hstatic.net/1000026602/product/img_3530_2cb0ab0496bb45428a5a6de77c231af9_large.jpg"
                      alt="" width="280" height="370"></a>
                </div>
                <div class="overlay">
                  <div class="title-price text-black">
                    <a href="" class="text-xl">Quần áo nam</a>
                    <span class="py-3 text-xl text-red-600 ">100.000đ</span>
                    <span class="pt-3 font-light line-through text-gray-300">200.000đ</span>
                    <button type="button"
                      class="px-2 py-2 text-white border border-solid border-black bg-black text-whtie hover:text-red-500">ADD
                      TO CARD</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
      
            <!-- More products... -->
          </div>
        </div>
      </div>
      ${Footer.render()}`;

    },
};
export default Product;