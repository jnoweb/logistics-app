import type React from "react";
import { Link } from "react-router";
import { menuItems } from "~/constants";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-48 h-full border-r border-gray-300 bg-white">
      <nav className="p-2">
        <ul>
          {menuItems.map(({ title, url }, index) => (
            <Link
              to={url}
              className="py-2 px-4 hover:bg-gray-100 cursor-pointer rounded block"
            >
              {title}
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
