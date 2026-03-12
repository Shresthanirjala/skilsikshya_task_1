import React from "react";

const Navbar = () => {
  const navItems = [
    { name: "Task One", link: "/" },
    { name: "Task Two", link: "/task-two" },
  ];
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-xl font-bold">Vrit Tech</h1>
      </div>
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="hover:text-gray-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
