import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Message } from "../../components/Message";
import { Table } from "../../components/Table";
import { Text } from "../../components/Text";
import { TicketDetailColumn } from "./constants";
import {
  ButtonSizeVariants,
  ButtonVariants,
  TableVariants,
  TextVariants,
} from "../../constants/VariantsOfComponents";
import { printDate } from "../../helpers/helpers";

import { useProfileInfoSelector } from "../../store/Profile/ProfileInfo/useProfileInfo";
import { useSupportActions } from "../../store/Support/useSupportActions";
import { useViewTicketSelector } from "../../store/Support/ViewTicket/useViewTicket";

const ViewTicket = () => {
  const [message, setMessage] = useState("");
  const [today] = useState(new Date());
  const { username } = useProfileInfoSelector();
  const { addMessageToChat } = useSupportActions();
  const { ticket } = useViewTicketSelector();
  const { chat } = ticket;

  const handleClickSend = () => {
    message && addMessageToChat({ username, text: message, date: Date.now() });
    setMessage("");
  };

  const handleClickSupportMes = () => {
    message &&
      addMessageToChat({
        username: "support",
        text: message,
        date: Date.now(),
      });
    setMessage("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="view-ticket">
        <div className="title">
          <Text className="link" variant={TextVariants.h4}>
            <Link to={"/profile/support"}>
              <Text>Support -</Text>
            </Link>{" "}
            View Ticket
          </Text>
          <Text variant={TextVariants.h1_medium}>View Ticket</Text>
        </div>
        <div className="view-chat">
          <div className="chat">
            <Text variant={TextVariants.h3}>Chat with Support</Text>
            <div className="messages">
              <Text variant={TextVariants.h4_regular}>
                {printDate(today, 1)}
              </Text>
              <div>
                {chat.length === 0 && (
                  <Text variant={TextVariants.h4}>There are no messages</Text>
                )}
                {chat.map((message, index) => (
                  <Message
                    key={index}
                    isYourMessage={message.username === username}
                    message={message}
                  />
                ))}
              </div>
            </div>
            <div className="new-message">
              <Text variant={TextVariants.h3}>Your message</Text>
              <Input
                placeholder="Enter your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline={true}
              />
              <Button
                onClick={handleClickSend}
                text="Send"
                variant={ButtonVariants.yellow}
                size={ButtonSizeVariants.large}
                isLight={true}
                width="full"
              />
              <Button
                onClick={handleClickSupportMes}
                text="Send support"
                variant={ButtonVariants.yellow}
                size={ButtonSizeVariants.large}
                width="full"
                isLight={true}
              />
            </div>
          </div>
          <div className="detail">
            <Text variant={TextVariants.h3}>Ticket Details</Text>
            <Table
              variant={TableVariants.TicketsDetail}
              data={[ticket]}
              columnNames={TicketDetailColumn}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewTicket;
