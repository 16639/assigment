import Navigo from "navigo";
import News from "./components/news";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import DetailNewsPage from "./pages/DetailNews";
import HomePage from "./pages/home";
import signIn from "./pages/signIn";
import signUp from "./pages/signUp";
import Dashboard from "./pages/admin/dashboard";
import DetailProduct from "./pages/products/detailPrd";
import Product from "./pages/products";


const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
if(content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before(done, match) {
      // do something
      if(localStorage.getItem('user')){
        const userId = JSON.parse(localStorage.getItem('user')).id;
        if(userId === 1){
            done();  
        } else {
            document.location.href="/";
        }
      } else{
          document.location.href="/";
      }
      
    }
  })
router.on({
    "/":() => print(HomePage),

    "/signup": () => print(signUp),
    "/signin": () => print(signIn),
    "/products":() => print(Product),
    "/products/:id": ({data}) => print(DetailProduct, data.id),
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


router.notFound(() => alert("page not found")); 
router.resolve();
 