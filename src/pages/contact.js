import Footer from "../components/footer";
import Header from "../components/header";

const Contact = {
    render(){
        return /*html */`
        ${Header.render()}
        <div class="flex justify-evenly border py-20 drop-shadow-md">
        <div>
          
        </div>
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full  px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Họ Tên
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="">
          </div>
          
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              E-mail
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
          </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
              Message
              </label>
              <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
          </div>
          </div>
          <div class="md:flex md:items-center">
          <div class="md:w-1/3">
              <button class="shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
              Gửi
              </button>
          </div>
          <div class="md:w-2/3"></div>
          </div>
      </form>
      
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.980384378738!2d105.81945410307661!3d21.022778763212333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1644765271092!5m2!1svi!2s" width="600" height="550" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      </div>
      ${Footer.render()}`;
   },
};
export default Contact;