import Footer from "../components/footer";
import Header from "../components/header";
import newArrival from "../components/newArrvial";

const HomePage = {
    render(){
        return /*html */`
        <div class="max-w-full mx-atuo">
            ${Header.render()}
            <div class="pt-32">
                <img src="https://theme.hstatic.net/1000026602/1000811650/14/slideshow_4.jpg?v=534" alt="">
            </div>
            ${newArrival.render()}
            ${Footer.render()}
        </div>`;
    },
};
export default HomePage;