import React, { useContext } from 'react';
import avatar from '../../assets/img/profile.svg';
import { ChatContext } from '../../Context/ChatContext';

const ContactCard = ({contact, user}) => {
  const { createChat } = useContext(ChatContext);
  return (
    <button onClick={ () => createChat(user._id, contact._id)} className="flex items-center p-3 gap-3 w-full bg-white rounded-lg shadow cursor-pointer dark:bg-gray-600">
        <img src={avatar} alt="" className="w-10 h-10 rounded-full" />
        <p className="text-gray-700 dark:text-gray-200 font-semibold text-sm">{contact.name}</p>
    </button>
  )
}

export default ContactCard