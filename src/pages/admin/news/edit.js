import { get, update } from "../../../api/post";
import NavAdmin from "../../../components/NavAdmin";


const AdminEditNews = {
    async render(id){
        const {data} = await get(id);
        return /*html */`
        ${NavAdmin.render()}
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <form action="" id="form-edit" >
        <div class="px-4 py-6 sm:px-0">
          <div class=" h-96">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label class="block text-sm font-medium text-gray-700">
                  Tiêu Đề
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input type="text" id="title-post"
                    class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Tiêu Đề" value="${data.title}">
                </div>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Mô Tả
              </label>
              <div class="mt-1">
                <textarea id="desc-post" name="about" rows="3"
                  class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" value="${data.desc}"></textarea>
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
                  <div>
                      <input type="file" id="img-post" class="my-2" placeholder="upload img">
                      <img src="${data.img}" id="img-preview" width="150" class="mx-auto" />
                  </div>
                  </div>
                  <p class="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div><br>
          <button class="bg-blue-500 text-white p-4 mt-5 rounded hover:bg-blue-600" >Thêm mới</button>
          </form>
        </div>
        <!-- /End replace -->
      </div>`;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        const imgPost = document.querySelector('#img-post');
        const imgPreview = document.querySelector('#img-preview');
        let imgLink = "";
        
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/ph16639/image/upload"
        const CLOUDINARY_PRESET = "lwoewxps";
        
        // preview image when upload
        imgPost.addEventListener('change', async (e) => {
          imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });
    
        formEdit.addEventListener("submit", async(e) => {
            e.preventDefault();
            const file = imgPost.files[0];
            if(file){
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', CLOUDINARY_PRESET);
          
              // call api cloudinary
              
                const { data } = await axios.post(CLOUDINARY_API, formData, {
                  headers: {
                    "Content-Type": "application/form-data"
                  }
                });
                imgLink = data.url;
            }
            update({
                id,
                title: document.querySelector('#title-post').value,
                img: imgLink ? imgLink : imgPreview.src,
                desc:document.querySelector('#desc-post').value,
            });
    
        });
    },
};
export default AdminEditNews;