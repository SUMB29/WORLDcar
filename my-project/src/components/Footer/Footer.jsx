const Footer = () => {
  return (
    <footer className="bg-red-500 text-black text-sm font-medium py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Sumit Basak. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs sm:text-sm">
          <a href="#" className="hover:text-white transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-white transition duration-300">Terms</a>
          <a href="#" className="hover:text-white transition duration-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
