import { createContext, useCallback, useEffect, useState } from "react";
import { baseUrl, getRequest, postRequest } from './../utils/services';
import {io} from 'socket.io-client';

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
    const [userChats, setUserChats] = useState(null);
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(true);
    const [userChatsError, setUserChatsError] = useState(null);
    const [potentialChats, setPotentialChats] = useState([]);
    const [ currentChat, setCurrentChat ] = useState(null);
    const [ messages, setMessages ] = useState(null);
    const [ isMessageLoading, setIsMessageLoading ] = useState(false);
    const [ messageError, setMessageError ] = useState(null);
    const [ newMessage, setNewMessage] = useState(null);
    const [ sendMessageError, setSendMessageError ] = useState(null);
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [notifications, setNotifications] = useState([]);

    // initial socket
    useEffect(() => {
        const newSocket = io("http://localhost:4000");
        setSocket(newSocket);

        return () => {
            newSocket.disconnect();
        }
    }, [user]);

    // add online user
    useEffect(() => {
        if(socket === null) return
        socket.emit("addNewUser", user?._id);
        socket.on("getOnlineUsers", (onlineUsers) => {
            setOnlineUsers(onlineUsers);
        })

        return () => {
            socket.off("getOnlineUsers");
        }
    },[socket])


    // send message
    useEffect(() => {
        if(socket === null) return;
        
        const recipientId = currentChat?.members.find((id) => id !== user?._id);
        socket.emit("sendMessage", { ...newMessage, recipientId });

    }, [newMessage]);

    // recieve message
   useEffect(() => {
    if(socket === null) return;
    socket.on("getMessage", res => {
        if(currentChat?._id !== res.chatId) return;

        setMessages(prev => [...prev, res]);
    });

    // get message notification
    socket.on("getNotification", (res) => {
        const isChatOpen = currentChat?.members.some(id => id === res.senderId);
        if(isChatOpen) {
            setNotifications(prev => [{...res, isRead: true}, ...prev])
        } else {
            setNotifications(prev => [...prev, res]);
        }
    })

    return () => {
        socket.off("getNotification")
    };
   }, [socket, currentChat]);

    useEffect(()=> {
        const getUsers = async () => {
            const response = await getRequest(`${baseUrl}/users`);
            if(response.error)
            {
                console.log("Error fetching users: ", response);
            }
            const pChats = response.filter((u) => {
                let isChatCreated = false;
                if(user?._id === u?._id) return false;

                if(userChats) {
                    isChatCreated = userChats?.some(chat => {
                        return chat?.members[0] === u?._id || chat.members[1] === u?._id;
                    })
                }

                return !isChatCreated;
            });
            setPotentialChats(pChats);
        }

        getUsers();
    }, [userChats]);

    useEffect(() => {
        const getUserChats = async () => {
            if (user?._id) {
                setIsUserChatsLoading(true);
                setUserChatsError(null);

                const response = await getRequest(`${baseUrl}/chats/${user?._id}`);
                setIsUserChatsLoading(false);
                if (response.error) {
                    return setUserChatsError(response);
                }

                setUserChats(response);
            }
        };
        getUserChats();
    }, [user]);

    useEffect(() => {
        const getMessages = async () => {
            setIsMessageLoading(true);
            setMessageError(false);

            const response = await getRequest(`${baseUrl}/messages/${currentChat?._id}`);

            setIsMessageLoading(false);

            if(response.error){
                return setMessageError(response);
            }
            setMessages(response);
        }
        getMessages();
    }, [currentChat]);

    const updateCurrentChat = useCallback((chat) => {
        setCurrentChat(chat);
    },[]);

    const createChat = useCallback(async (firstId, secondId) => {
        const response = await postRequest(`${baseUrl}/chats`, JSON.stringify({
            firstId, 
            secondId,
        }));
        if(response.error) {
            console.log("Error while creating chat... ", response);
        }
        setUserChats((prev) => {
            return [...prev, response];
        });
    }, []);

    const sendTextMessage = useCallback(async (textMessage, sender, currentChatId, setTextMessage) => {
        if(!textMessage) return console.log("You must type something...");

        
        const response = await postRequest(`${baseUrl}/messages`, JSON.stringify({
            chatId: currentChatId,
            senderId: sender._id,
            text: textMessage,
        }));


        if(response.error){
            return setSendMessageError(response);
        }

        setNewMessage(response);
        setMessages((prev) => [...prev, response]);
        setTextMessage("");

    }, [])

    return (<ChatContext.Provider value={{
        user,
        userChats,
        isUserChatsLoading,
        userChatsError,
        potentialChats,
        createChat,
        currentChat,
        updateCurrentChat,
        messages,
        messageError,
        isMessageLoading,
        sendTextMessage,
        onlineUsers,
        notifications,
    }}>
        {children}
    </ChatContext.Provider>)
}