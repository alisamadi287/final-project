import React, { useContext, useState } from "react";
import Search from "../common/Search";
import Divider from "../common/Divider";
import { ChatContext } from "../../Context/ChatContext";
import ContactCard from "./ContactCard";
import { AuthContext } from "../../Context/AuthContext";

const Contacts = () => {
  const { potentialChats, createChat } = useContext(ChatContext);
  const { user } = useContext(AuthContext);
  const searchIcon = "ion-ios-search text-blue-900 dark:text-gray-300";
  return (
    <>
      <Search icon={searchIcon} placeholder={"Search"} />
      <Divider />
      <div className="flex flex-col gap-3 overflow-auto p-2">
        <p className="text-sm font-semibold mb-3  dark:text-gray-200">All Users</p>
        {potentialChats && potentialChats.map((contact, index) => {
          return <ContactCard contact={contact} user={user} key={index} />
        })}
      </div>
    </>
  );
};

export default Contacts;
