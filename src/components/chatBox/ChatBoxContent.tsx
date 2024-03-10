import InputSection from "./InputBoxSection";

const ChatBoxContent = () => {
  return (
    <article className="chatbox-content">
    <section className="chatbox-section mt-4">
      <div className="chatbox-list-block">
        <ul className="chatbox-list-items list-unstyled">
          <li>
            <div className="user-info">
              <p className="chat-text">
                Do almond trees have flowers during bloom?
              </p>
              <span className="user-name">KM</span>
            </div>
          </li>
          <li>
            <div className="self-text d-flex">
              <div className="eagle-icon d-flex justify-content-center align-items-start">
                <img src="images/eagle-logo.png" alt="" />
              </div>
              <div className="chatbox-content-text d-flex justify-content-center align-items-start">
                <p className="chat-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse.
                </p>
              </div>
              <ul className="like-icons list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa-solid fa-arrow-rotate-left"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa-regular fa-thumbs-up"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa-regular fa-thumbs-down"></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="user-info">
              <p className="chat-text">
                Do almond trees have flowers during bloom?
              </p>
              <span className="user-name">KM</span>
            </div>
          </li>
          <li>
            <div className="self-text d-flex">
              <div className="eagle-icon d-flex justify-content-center align-items-start">
                <img src="images/eagle-logo.png" alt="" />
              </div>
              <div className="chatbox-content-text d-flex justify-content-center align-items-start">
                <p className="chat-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse.
                </p>
              </div>
              <ul className="like-icons list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa-solid fa-arrow-rotate-left"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa-regular fa-thumbs-up"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa-regular fa-thumbs-down"></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <footer>
      <InputSection/>
    </footer>
    <div className="profile-setttings-mobile">
      <div className="profile-icon text-center">
        <span className="profile-icon fs-3">
          <i className="fa-solid fa-user-gear"></i>
        </span>
        <span className="profile-title fs-5 fw-bold ps-2">
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            My Profile
          </a>
        </span>
      </div>
      <div className="chatbox-footer text-center mt-2">
        <p>© 2024 Nighthawk. All rights reserved.</p>
      </div>
    </div>
  </article>
  );
};

export default ChatBoxContent;
