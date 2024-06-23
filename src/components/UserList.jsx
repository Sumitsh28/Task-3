import React from "react";
import { motion } from "framer-motion";
import default_img from "../assets/man.png";
import { useTheme } from "../context/ThemeContext";

const UserList = ({ users, handleUserClick, showUserList }) => {
  const { theme } = useTheme();
  return (
    <ul className="space-y-4">
      {users.map((user, index) => (
        <motion.li
          key={user.id}
          className={`p-4 ${
            theme === "light" ? "bg-gray-200" : "bg-[#2D3035] "
          } rounded-full shadow-3d cursor-pointer hover:shadow-3d-hover hover:bg-gray-800 ${
            theme === "light" && "hover:text-gray-100"
          }`}
          onClick={() => handleUserClick(user)}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className={`${
              theme === "light" ? "text-#141414" : "text-gray-100"
            } mr-5 text-xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            #{index + 1}
          </motion.span>
          <motion.img
            src={user.avatar}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = default_img;
            }}
            alt={`${user.profile.firstName} ${user.profile.lastName}`}
            className="w-12 h-12 rounded-full inline-block mr-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.span
            className={`${
              theme === "light" ? "text-#141414" : "text-gray-100"
            } `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {user.profile.firstName} {!showUserList && user.profile.lastName}
          </motion.span>
        </motion.li>
      ))}
    </ul>
  );
};

export default UserList;
