import ContactForm from './ContactForm';


const Footer = () => {
    return (
        <div>
            <ContactForm></ContactForm>
            <footer className="footer flex items-center justify-center p-4 bg-neutral text-neutral-content">
                <div className="text-center flex items-center space-x-2">
                    <p className="text-white font-semibold">
                        Copyright © 2024 - All rights reserved by My Camera Shop
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;