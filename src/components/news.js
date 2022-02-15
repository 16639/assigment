import style from "./news.module.css";
import axios from 'axios';
import { getAll } from "../api/post";
const News = {
    async render() {
        const { data } = await getAll()
        return /* html */`
            <h2 class="font-semibold text-2xl text-blue-900 my-4 uppercase">Tin tức học lập</h2>
            <div>
                <div class="grid grid-cols-3 gap-8">
                        ${data.map((post) => /*html */`
                                    <div class="${style["news-item"]} border p-4">
                                        <div class="news-img">
                                            <a href="/news/${post.id}">
                                                <img src="${post.img}" />
                                            </a>
                                        </div>
                                        <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500">${post.title}</a></h3>
                                        <p class="text-sm text-gray-600">${post.desc}</p>
                                    </div>
                            `).join("")}
                </div>
            </div>`;
    },
};
export default News;