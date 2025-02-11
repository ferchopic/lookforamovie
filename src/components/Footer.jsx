const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm font-bold">
                    © {new Date().getFullYear()} <a href="https://www.linkedin.com/in/fernando-hirschfeld-b28402225" className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">Fernando Hirschfeld</a>. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer; 