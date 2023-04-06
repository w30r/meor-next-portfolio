import React from "react";

function Footer() {
  return (
    <footer className=" bg-white rounded-lg shadow m-6 dark:bg-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center md:flex md:items-center md:justify-end">
        <span className="text-sm text-teal-700 sm:text-center dark:text-teal-700">
          © 2023{" "}
          <a
            href="https://google.com/"
            className="hover:underline font-semibold"
          >
            developedbymeor
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
