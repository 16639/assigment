import { getAll } from "../api/post";
import Footer from "./footer";
import Header from "./header";
const News = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        ${Header.render()}
        <h2 class="font-semibold text-2xl text-black my-4 uppercase">Tin tức </h2>
        <div class="news ml-10 my-10">
            <div class="mx-auto grid grid-cols-4 gap-4">
                    ${data.map((post) => /*html */`
                                <div class="news-item border p-5 w-96">
                                    <div class="news-img">
                                        <a href="/news/${post.id}">
                                            <img src="${post.img}" width="380px" />
                                        </a>
                                    </div>
                                    <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-xl text-orange-500">${post.title}</a></h3>
                                    <p class="text-sm text-gray-600">${post.desc}</p>
                                </div>
                        `).join("")}
            </div>
        </div>
        ${Footer.render()}`;
    },
};
export default News;