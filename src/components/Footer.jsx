import { FaInstagram, FaFacebook } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative z-50 w-full min-h-32 bg-primary mt-48">
      <div className="max-w-[2500px] flex justify-between mx-auto py-6 px-6 text-start/ text-primary-content">
        <span className="text-base">
          © 2025 Breka Bakery & Café. All rights reserved.
          <br></br>
          Motion Design Guidelines and Implementation Project by Ken Yau
        </span>
        <span className="flex items-center gap-4">
          <FaInstagram className="w-6 h-6 text-primary-content" />
          <FaFacebook className="w-6 h-6 text-primary-content" />
        </span>
      </div>
    </footer>
  );
}
