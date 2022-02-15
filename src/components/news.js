import footer from "../components/footer";
import header from "../components/header";
//import data from "../data";
import axios from "axios";
import { get } from "../api/post";

const DetailNewPage = { 
    async render(id){
        const { data } = await get(id);
        return /*html */`
        <div class = "container"> 
            ${header.render()}
            <div class= "my-10 max-w-7xl mx-auto" >
                    <h1 class="py-5 font-semibold text-xl text-orange-500 " >${data.title}</h1>
                    <img src="${data.img}" />
                    <div class = "py-5" >${data.desc}</div>
            </div>
            ${footer.render()}
        </div>
        `;
        
    },

};

export default DetailNewPage;