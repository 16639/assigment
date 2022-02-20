import instance from "./config";

export const getAll = () => {
    const url = `/categories`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}
export const add = (categories) => {
    const url = `/categories`;
    return instance.categories(url, categories)
}
export const remove = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url)
}
export const update = (categories) => {
    const url = `/categories/${post.id}`;
    return instance.put(url, post)
}