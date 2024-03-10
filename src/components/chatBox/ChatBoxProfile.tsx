import { useState } from "react";
import MyProfileModal from "../myProfileModal";

const ChatBoxProfile = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <article className="chat-profile">
        <form className="edit-chat">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="New Chat"
            />
            <span className="pen-icon">
              <i className="fa-regular fa-pen-to-square"></i>
            </span>
          </div>
        </form>
        <div className="chat-history-block">
          <div className="chat-history-days">
            <p className="today-title">Today</p>
            <ul className="list-unstyled daily-list ps-4">
              <li>How many petals are i…</li>
              <li>List the types of fertil…</li>
              <li>Organic inputs for the…</li>
            </ul>
          </div>
          <div className="chat-history-days">
            <p className="pastday-title">Last 7 Days</p>
            <ul className="list-unstyled daily-list ps-4">
              <li>How many petals are i…</li>
              <li>List the types of fertil…</li>
              <li>Organic inputs for the…</li>
            </ul>
          </div>
        </div>
        <div className="profile-setttings-desk">
          <div className="profile-icon text-center" onClick={handleShow}>
            <span className="profile-icon fs-3">
              <i className="fa-solid fa-user-gear"></i>
            </span>
            <span className="profile-title fs-5 fw-bold ps-2">
              <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                My Profile
              </a>
            </span>
          </div>
          <div className="chatbox-footer text-center mt-2">
            <p>© 2024 Nighthawk. All rights reserved.</p>
          </div>
        </div>
      </article>
      <MyProfileModal show={show} handleClose={handleClose}/>
    </>
  );
};

export default ChatBoxProfile;
