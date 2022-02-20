import Navigo from "navigo";
import News from "./components/news";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import DetailNewsPage from "./pages/DetailNews";
import HomePage from "./pages/home";
import signIn from "./pages/signIn";
import signUp from "./pages/signUp";
import DetailProduct from "./pages/products/detailPrd";
import Product from "./pages/products";
import NavAdmin from "./components/NavAdmin";
import AdminNews from "./pages/admin/news";
import addNews from "./pages/admin/news/add";
import AdminEditNews from "./pages/admin/news/edit";
import AdminProducts from "./pages/admin/products";
import addProducts from "./pages/admin/products/add";
import AdminEditProduct from "./pages/admin/products/edit";

const router = new Navigo("/", { linksSelector: "a", hash: true });
const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
if(content.afterRender) content.afterRender(id);
};

// phải đăng nhập với id === 1 để truy cập được vào router admin
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
          alert=('Bạn chưa được cấp quyền');

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
    "/admin/dashboard": () => print(NavAdmin), 
    "/admin/products": () => print(AdminProducts),
    "/admin/products/add": () => print(addProducts),
    "/admin/products/:id/edit": ({data}) => print(AdminEditProduct, data.id),
    "/admin/news": () => print(AdminNews),
    "/admin/news/add": () => print(addNews),
    "/admin/news/:id/edit": ({data}) => print(AdminEditNews, data.id),
});


router.notFound(() => alert("page not found")); 
router.resolve();
 