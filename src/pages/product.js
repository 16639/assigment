import Header from "../components/header";
import Footer from "../components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { getAll } from "../api/post";
import catePrd from "../components/catePrd";
const Product = {
    async render(){
      const {data} = await getAll()
        return /*html */ `
        ${Header.render()}
        <div class="bg-white">
        <div class="w-10/12 mx-auto py-16 px-4 ">
          
      
          <div class=" flex justify-around">
            ${catePrd.render()}
            <div>
                <h2 class="font-semibold text-xl py-4">Products</h2>
              <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              ${data.map((product) => /*html*/`

                <div class="product" data-aos="fade-left"
                                      data-aos-anchor="#example-anchor"
                                      data-aos-offset="500"
                                      data-aos-duration="500">
                  <div class="item">
                    <a href=""><img
                        src="${product.img}"
                        alt="/#/products/${product.id}" width="280" height="370"></a>
                  </div>
                  <div class="overlay">
                    <div class="title-price text-black">
                      <a href="/#/products/${product.id}" class="text-xl">${product.name}</a>
                      <span class="py-3 text-xl text-red-600 ">${product.price}</span>
                      <span class="pt-3 font-light line-through text-gray-300">200.000đ</span>
                      <button type="button"
                        class="px-2 py-2 text-white border border-solid border-black bg-black text-whtie hover:text-red-500">ADD
                        TO CARD</button>
                    </div>
                  </div>

                </div>
                `).join("")} 

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