import React, { useContext, useState } from "react";
import Search from "../common/Search";
import Divider from "../common/Divider";
import Chat from "./Chat";
import { ChatContext } from "../../Context/ChatContext";
import { AuthContext } from "../../Context/AuthContext";
import Loading from "../common/Loading";

const ChatList = () => {
  const { user } = useContext(AuthContext);

  const { userChats, isUserChatsLoading, updateCurrentChat } =
    useContext(ChatContext);
  const [selected, setSelected] = useState(0);
  const searchIcon = "ion-ios-search text-blue-900 dark:text-gray-300";
  return (
    <>
      <Search icon={searchIcon} placeholder={"Search"} />
      <Divider />
      <div className="flex flex-col gap-3 overflow-auto px-2">
        <p className="text-sm font-semibold mb-3  dark:text-gray-200">All Chats</p>
        {userChats?.length < 1 ? null :
          <div className="flex flex-col gap-3 py-2">
            {isUserChatsLoading && <Loading />}
            {userChats?.map((chat, index) => {
              return (
                <div key={index} onClick={ () => updateCurrentChat(chat) }>
                  <Chat user={user} chat={chat} className={{ bg: 'bg-white dark:bg-gray-600', color: 'text-gray-600 dark:text-gray-200' }} />
                </div>
              );
            })}
          </div>
        }
      </div>
    </>
  );
};

export default ChatList;
