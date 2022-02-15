import axios from "axios";
import { get } from "../api/post";
import Header from "../components/header";

const DetailNewsPage = {
    async render(id) {
        const { data } = await get(id);
        return /*html */`
        ${Header.render()}
        <div>
            <h1>${data.title}</h1>
            <img src="${data.img}" width="500" height="450"/>
            <div>${data.desc}</div>
        </div>
        `
    },
};
export default DetailNewsPage;