import { FC } from "react";
import ChatBoxProfile from "../components/chatBox/ChatBoxProfile";
import ChatBoxContent from "../components/chatBox/ChatBoxContent";

interface ChatboxProps {}

const ChatBoxPage: FC<ChatboxProps> = () => {
  return (
    <section className="chatbox-body">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-4 col-lg-3">
            <ChatBoxProfile />
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-9">
            <ChatBoxContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBoxPage;
