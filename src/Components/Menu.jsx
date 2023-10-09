import React, { useContext, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import ChatList from "./Chat/ChatList";
import { Route, Routes } from "react-router-dom";
import Contacts from "./Contacts/Contacts";
import Settings from "./Settings/Settings";

const Menu = () => {
  const { themeMode, switchTheme } = useContext(ThemeContext);
  return (
    <div className="w-72 flex flex-col h-screen bg-[#FAF8FF] shadow border-r dark:border-gray-600 py-5 px-4 dark:bg-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold dark:text-gray-200">Chats</h3>
        <button
          onClick={ () => switchTheme() }
          className="cursor-pointer rounded-full flex-center bg-blue-100 dark:bg-gray-400 w-8 h-8 text-center shadow"
        >
          <i
            className={`${themeMode === "light"
                ? "ion-android-sunny text-xl"
                : "ion-ios-moon text-2xl"
              } text-gray-700 dark:text-white`}
          ></i>
        </button>
      </div>
      <Routes>
        <Route path="/admin/chats" element={<ChatList />} />
        <Route path="/admin/contacts" element={<Contacts />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Routes>
    </div>
  );
};

export default Menu;
