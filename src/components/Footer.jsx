import { FaPlaneDeparture } from 'react-icons/fa';
import ContactForm from './COntactForm';

const Footer = () => {
    return (
        <div>
            <ContactForm></ContactForm>
            <footer className="footer flex items-center justify-center p-4 bg-neutral text-neutral-content">
                <div className="text-center flex items-center space-x-2">
                    <FaPlaneDeparture className="text-white text-xl" />
                    <p className="text-white font-semibold">
                        Copyright © 2024 - All rights reserved by Jatra Bondhu Tours & Travels
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;