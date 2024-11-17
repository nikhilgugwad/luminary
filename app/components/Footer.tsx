import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-4">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-gray-800 mb-2">
          <span>&copy; {currentYear} Luminary</span>
        </div>
        <div className="text-gray-400">
          Made by{" "}
          <a
            href="https://github.com/nikhilgugwad"
            className="underline text-gray-400 hover:text-black"
          >
            Nikhil Gugwad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
