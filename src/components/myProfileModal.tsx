// MyModal.tsx

import { Modal, Button } from "react-bootstrap";

function MyProfileModal({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) {
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-3">
                <div className="tab-profile-list">
                  <div
                    className="nav flex-column nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      General
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      My Fields
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      My Data
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-settings-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-settings"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-settings"
                      aria-selected="false"
                    >
                      Delete All Chats
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-recommend-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-recommend"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-recommend"
                      aria-selected="false"
                    >
                      Recommendations
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-9">
                <div className="tab-profile-content">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                      tabIndex={0}
                    >
                      <form action="#">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="name">Contact</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="name">Company</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="name">Email</label>
                              <input type="email" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="name">Main Crop</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="name">Total Acreage</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="name">Region</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group custom-switch">
                              <label htmlFor="name">Custom Options</label>
                              <div className="form-check form-switch">
                                <label
                                  className="form-check-label"
                                  htmlFor="flexSwitchCheckDefault"
                                >
                                  Custom Option
                                </label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                              <div className="form-check form-switch">
                                <label
                                  className="form-check-label"
                                  htmlFor="flexSwitchCheckDefault"
                                >
                                  Custom Option
                                </label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                              <div className="form-check form-switch">
                                <label
                                  className="form-check-label"
                                  htmlFor="flexSwitchCheckChecked"
                                >
                                  Custom Option
                                </label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckChecked"
                                  checked
                                />
                              </div>
                              <div className="form-check form-switch">
                                <label
                                  className="form-check-label"
                                  htmlFor="flexSwitchCheckDefault"
                                >
                                  Custom Option
                                </label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  role="switch"
                                  id="flexSwitchCheckDefault"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="form-group">
                              <label htmlFor="name">Farming Style/type</label>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="gridCheck"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="gridCheck"
                                >
                                  Organic
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="gridCheck"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="gridCheck"
                                >
                                  Hybrid
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="gridCheck"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="gridCheck"
                                >
                                  Individual
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                      tabIndex={0}
                    >
                      My Fields
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                      tabIndex={0}
                    >
                      My Data
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-settings"
                      role="tabpanel"
                      aria-labelledby="v-pills-settings-tab"
                      tabIndex={0}
                    >
                      Delete All charts
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-recommend"
                      role="tabpanel"
                      aria-labelledby="v-pills-recommend"
                      tabIndex={0}
                    >
                      Recommendations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyProfileModal;
