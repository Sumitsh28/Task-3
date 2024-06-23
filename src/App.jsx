import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import UserList from "./components/UserList";
import UserInfo from "./components/UserInfo";
import { motion } from "framer-motion";
import { useTheme } from "./context/ThemeContext";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showUserList, setShowUserList] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    axios
      .get("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    toggleUserList();
  };

  const toggleUserList = () => {
    setShowUserList(!showUserList);
  };

  return (
    <div
      className={`min-h-screen flex font-abc ${
        theme === "light" ? "bg-#fff" : "bg-[#36393E]"
      }`}
    >
      <div className="lg:hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: showUserList ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 bg-none bg-opacity-75 z-50 overflow-y-scroll"
        >
          <div
            className={`w-[75%] p-4 ${
              theme === "light" ? "bg-gray-400" : "bg-[#202226]"
            } h-screen overflow-y-scroll rounded-r-3xl`}
          >
            <div className="flex items-center justify-center">
              <h1
                className={`text-3xl ${
                  theme === "light" ? "text-#000" : "text-gray-100"
                } mb-5`}
              >
                USER LIST
              </h1>
            </div>
            {loading ? (
              <Loader />
            ) : error ? (
              <div className="text-center text-red-500">No data to show</div>
            ) : (
              <UserList
                users={users}
                handleUserClick={handleUserClick}
                showUserList={showUserList}
              />
            )}
          </div>
        </motion.div>

        <button
          className="fixed bottom-6 right-6 bg-gray-900 rounded-full p-3 text-white z-50 block lg:hidden opacity-80"
          onClick={toggleUserList}
        >
          {showUserList ? "Close" : "User List"}
        </button>
      </div>

      <div className="flex w-full justify-center">
        <div
          className={`w-1/3 p-4 ${
            theme === "light" ? "bg-gray-400" : "bg-[#202226]"
          } h-screen overflow-y-scroll rounded-r-3xl hidden lg:block`}
        >
          <div className="flex items-center justify-center">
            <h1
              className={`text-3xl ${
                theme === "light" ? "text-#000" : "text-gray-100"
              } mb-5`}
            >
              USER LIST
            </h1>
          </div>
          {loading ? (
            <Loader />
          ) : error ? (
            <div className="text-center text-red-500">No data to show</div>
          ) : (
            <UserList users={users} handleUserClick={handleUserClick} />
          )}
        </div>

        <div
          className={`w-2/3 p-4 ${
            theme === "light" ? "bg-#fff" : "bg-[#36393E]"
          }`}
        >
          <div className="flex items-center justify-center">
            <h1
              className={`lg:text-3xl text-2xl ${
                theme === "light" ? "text-#000" : "text-gray-100"
              } mb-5 lg:font-normal font-bold`}
            >
              USER INFORMATION
            </h1>
            <button
              className={`fixed top-6 right-6 bg-gray-900 rounded-full p-3 text-white z-50 block  opacity-80`}
              onClick={toggleTheme}
            >
              {theme === "light" ? <MdSunny /> : <IoMdMoon />}
            </button>
          </div>
          <UserInfo selectedUser={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
