import { useEffect, useRef, useState } from "react";
import ChatArea from "../../Components/ChatArea/ChatArea";
import ChatInput from "../../Components/ChatInput/ChatInput";
import ChatTitle from "../../Components/ChatTitle/ChatTitle";
import Message from "../../Components/Message/Message";
import WrapperContainer from "../../Components/WrapperContainer/WrapperContainer";
import { deleteNotification, receiveNotification, sendMessage } from "../../Api/api";

const Chat = ({ authData, phoneNumber }) => {
  const [messages, setMessages] = useState([]);
  const { idInstance, apiToken } = authData;
  const isUnmounted = useRef(false);
  const getAndDeleteNotification = async () => {
    try {
      while (!isUnmounted.current) {
        const notification = await receiveNotification(idInstance, apiToken);
        if (notification === null) {
          await new Promise((resolve) => setTimeout(resolve, 5000));
          continue;
        }
        if (notification?.body.typeWebhook === "incomingMessageReceived") {
          console.log(notification);
          const newMessage = {
            id: notification.body.idMessage,
            message: notification.body.messageData.textMessageData.textMessage,
            isUserMessage: true,
            timestamp: notification.body.timestamp,
            chatId: notification.body.senderData.chatId,
          };
          setMessages((prev) => [...prev, newMessage]);
          await deleteNotification(idInstance, apiToken, notification.receiptId);

          continue;
        }
        if (notification?.body.typeWebhook !== "incomingMessageReceived" && notification !== null) {
          await deleteNotification(idInstance, apiToken, notification.receiptId);
          continue;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSendMessage = async (messageText) => {
    const chatId = `${phoneNumber}@c.us`;
    console.log(messageText);
    const sendId = await sendMessage(idInstance, apiToken, chatId, messageText);
    if (sendId.idMessage) {
      const date = new Date();
      console.log(sendId);
      const newMessage = {
        id: sendId.idMessage,
        message: messageText,
        isUserMessage: false,
        timestamp: Math.floor(date.getTime() / 1000),
        chatId: chatId,
      };
      setMessages((prev) => [...prev, newMessage]);
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      window.localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages]);
  useEffect(() => {
    const savedMessages = window.localStorage.getItem("messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
    getAndDeleteNotification();
    return () => {
      isUnmounted.current = true;
    };
  }, []);

  return (
    <WrapperContainer type={"chat"}>
      <ChatTitle number={phoneNumber} />
      <ChatArea>
        {messages
          .filter((message) => message.chatId.split("@")[0] === phoneNumber)
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((m) => (
            <Message key={m.id} isUserMessage={m.isUserMessage} message={m.message} date={m.timestamp} />
          ))}
      </ChatArea>
      <ChatInput handleSendMessage={handleSendMessage} />
    </WrapperContainer>
  );
};

export default Chat;
