import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};

router.on({
    "/":() => print(HomePage),
    "/product":() => print(Product),
    "/product/:id": ({data}) => print(DetailProduct , data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),


    //////////admin/////////

    "/admin/dashboard": () => print(Dashboard),
    "/admin/product": () => print(Adminproduct),
    "/admin/product/add": () => print(AdminAddproduct),
    "/admin/product/:id/edit": ({data}) => print(AdminEditproduct, data.id),

    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(AdminAddNews),
    "/admin/news/:id/edit": ({data}) => print(AdminEditNews, data.id),
});


router.notFound(() => print("Not Found Page"));

router.resolve();