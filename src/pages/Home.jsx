import Banner from "../components/Home/Banner";
import FAQs from "../components/Home/FAQS";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Testimonials></Testimonials>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;