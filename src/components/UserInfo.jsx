import React from "react";
import { motion } from "framer-motion";
import default_img from "../assets/man.png";
import { useTheme } from "../context/ThemeContext";

const animationVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const itemHoverVariants = {
  hover: {
    scale: 1.03,
    transition: { duration: 0.1 },
  },
};

const UserInfo = ({ selectedUser }) => {
  const { theme } = useTheme();

  return selectedUser ? (
    <motion.div
      key={selectedUser.id} // Ensure the component re-renders with each new user
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeInOut" }}
      variants={animationVariants}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.img
          key={selectedUser.avatar}
          src={selectedUser.avatar}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = default_img;
          }}
          alt={selectedUser.profile.firstName}
          className="w-32 h-32 rounded-full mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.h2
          key={selectedUser.profile.firstName}
          className={`text-2xl mb-4 p-4 ${
            theme === "light" ? "bg-[#4B5563]" : "bg-[#5765F2]"
          } rounded-full shadow-3d cursor-pointer hover:shadow-3d-hover ] ${
            theme === "light" && "text-gray-200"
          }`}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          whileHover="hover"
          variants={itemHoverVariants}
        >
          {selectedUser.profile.firstName} {selectedUser.profile.lastName}
        </motion.h2>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-5 items-center mt-16 flex flex-col">
        <motion.p
          key={selectedUser.profile.email}
          className={`text-lg mb-4 p-4 ${
            theme === "light" ? "bg-[#4B5563]" : "bg-[#5765F2]"
          } lg:rounded-full rounded-3xl shadow-3d cursor-pointer`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover="hover"
          variants={itemHoverVariants}
        >
          <div className="flex lg:flex-row flex-col justify-center w-full text-center gap-2">
            <span className="text-xl font-bold">Email</span>
            <span className="hidden lg:block">|</span>
            <span className="italic text-gray-200">
              {selectedUser.profile.email}
            </span>
          </div>
        </motion.p>

        <motion.p
          key={selectedUser.profile.username}
          className={`text-lg mb-4 p-4 ${
            theme === "light" ? "bg-[#4B5563]" : "bg-[#5765F2]"
          } lg:rounded-full rounded-3xl shadow-3d cursor-pointer`}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover="hover"
          variants={itemHoverVariants}
        >
          <div className="flex lg:flex-row flex-col justify-center w-full text-center gap-2">
            <span className="text-xl font-bold">Username</span>
            <span className="hidden lg:block">|</span>
            <span className="italic text-gray-200">
              {selectedUser.profile.username}
            </span>
          </div>
        </motion.p>
      </div>

      <motion.p
        key={selectedUser.Bio}
        className={`text-lg mb-4 p-4 ${
          theme === "light" ? "bg-[#4B5563]" : "bg-[#5765F2]"
        } lg:rounded-full rounded-3xl shadow-3d cursor-pointer mt-5`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        whileHover="hover"
        variants={itemHoverVariants}
      >
        <div className="flex lg:flex-row flex-col justify-center w-full text-center gap-2">
          <span className="text-xl font-bold">Bio</span>
          <span className="hidden lg:block">|</span>
          <span className="italic text-gray-200">{selectedUser.Bio}</span>
        </div>
      </motion.p>

      <motion.p
        key={selectedUser.jobTitle}
        className={`text-lg mb-4 p-4 ${
          theme === "light" ? "bg-[#4B5563]" : "bg-[#5765F2]"
        } lg:rounded-full rounded-3xl shadow-3d cursor-pointer mt-5`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        whileHover="hover"
        variants={itemHoverVariants}
      >
        <div className="flex lg:flex-row flex-col justify-center w-full text-center gap-2">
          <span className="text-xl font-bold">Job Title</span>
          <span className="hidden lg:block">|</span>
          <span className="italic text-gray-200">{selectedUser.jobTitle}</span>
        </div>
      </motion.p>

      <motion.p
        key={selectedUser.createdAt}
        className={`text-lg mb-4 p-4 ${
          theme === "light" ? "bg-[#4B5563]" : "bg-[#5765F2]"
        } lg:rounded-full rounded-3xl shadow-3d cursor-pointer`}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        whileHover="hover"
        variants={itemHoverVariants}
      >
        <div className="flex lg:flex-row flex-col justify-center w-full text-center gap-2">
          <span className="text-xl font-bold">Created At</span>
          <span className="hidden lg:block">|</span>
          <span className="italic text-gray-200">
            {new Date(selectedUser.createdAt).toLocaleDateString()}
          </span>
        </div>
      </motion.p>
    </motion.div>
  ) : (
    <div className="text-center text-gray-500">
      Select a user to see details
    </div>
  );
};

export default UserInfo;
