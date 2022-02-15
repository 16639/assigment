import Navigo from "navigo";
import News from "./components/news";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import DetailNewsPage from "./pages/DetailNews";
import HomePage from "./pages/home";
import Product from "./pages/product";
import signIn from "./pages/signIn";
import signUp from "./pages/signUp";

const router = new Navigo("/", { linksSelector: "a" });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
if(content.afterRender) content.afterRender(id);
};

router.on({
    "/":() => print(HomePage),

    "/signup": () => print(signUp),
    "/signin": () => print(signIn),
    "/product":() => print(Product),
    "/product/:id": ({data}) => print(DetailProduct, data.id),
    "/news": () => print(News),
    "/news/:id": ({ data }) => print(DetailNewsPage, data.id),
    "/cart": () => print(Cart),
    "/contact": () => print(Contact),

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