import NavAdmin from "../../../components/NavAdmin";
import { add } from "../../../api/product";
import axios from "axios";
const addProducts = {
    render() {
        return /*html */`
        ${NavAdmin.render()}
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
  <!-- Replace with your content -->
  <form action="" id="form-add" >
  <div class="px-4 py-6 sm:px-0">
    <div class=" h-96">
      <div class="grid grid-cols-3 gap-6">
        <div class="col-span-3 sm:col-span-2">
            <label class="block text-sm font-medium text-gray-700">
                Tên sản phẩm
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
                <input type="text" id="name-product"
                class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                placeholder="Tên sản phẩm">
            </div>
        </div>
        <div class="col-span-3 sm:col-span-2">
            <label class="block text-sm font-medium text-gray-700">
                Giá sản phẩm
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
                <input type="number" id="price-product"
                class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                placeholder="Giá sản phẩm">
            </div>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">
          Mô Tả
        </label>
        <div class="mt-1">
          <textarea id="desc-product" name="about" rows="3"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"></textarea>
        </div>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">
          Cover photo
        </label>
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div class="space-y-1 text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
              aria-hidden="true">
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div class="flex text-sm text-gray-600">
                <input type="file" id="img-product" class="border border-black" placeholder="upload img">
            </div>
            <p class="text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div><br>
    <button class="bg-blue-500 text-white p-4 rounded hover:bg-blue-600" >Thêm mới</button>
    </form>
  </div>
  <!-- /End replace -->
</div>
        `;
    },
    afterRender(){
        const formAdd = document.querySelector('#form-add');
        const imgProduct = document.querySelector('#img-product');
        
        imgProduct.addEventListener('change', async (e) =>{
            const file = e.target.files[0];
            const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ph16639/image/upload"

            const formData = new FormData();

            formData.append('file', file);
            formData.append('upload_preset', "lwoewxps");

            //call api cloundnary
            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                }

            });
            console.log(response.data.url);

            formAdd.addEventListener("submit", (e) =>{
                e.preventDefault();
                console.log(formAdd);
                add({
                    name:document.querySelector('#name-product').value,
                    price:document.querySelector('#price-product').value,
                    img:response.data.url,
                    desc:document.querySelector('#desc-product').value,
                });
            });
        });
    },
};
export default addProducts;