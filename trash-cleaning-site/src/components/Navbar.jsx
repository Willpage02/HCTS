import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why" },
    { name: "Service Area", href: "#service-area" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">

        <div className="hidden md:flex items-center gap-8">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#0B1F3A] font-medium hover:text-[#1E5DB8]"
            >
              {link.name}
            </a>
          ))}

          <button className="bg-[#F6B72E] text-[#0B1F3A] px-6 py-3 rounded-full font-bold">
            Get Quote
          </button>

        </div>


        <button
          className="md:hidden text-[#0B1F3A]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>


      {open && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-5">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#0B1F3A]"
            >
              {link.name}
            </a>
          ))}

        </div>
      )}

    </nav>
  );
}

export default Navbar;