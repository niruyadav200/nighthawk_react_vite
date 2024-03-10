import { FC } from "react";

const AboutPopup: FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-3">
          <div className="tab-profile-list">
            <div
              className="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="nighthawk-tab"
                data-bs-toggle="pill"
                data-bs-target="#nighthawk"
                type="button"
                role="tab"
                aria-controls="nighthawk"
                aria-selected="true"
              >
                Nighthawk
              </button>
              <button
                className="nav-link"
                id="maia-tab"
                data-bs-toggle="pill"
                data-bs-target="#maia"
                type="button"
                role="tab"
                aria-controls="maia"
                aria-selected="false"
              >
                MAIA
              </button>
              <button
                className="nav-link"
                id="privacy-policy-tab"
                data-bs-toggle="pill"
                data-bs-target="#privacy-policy"
                type="button"
                role="tab"
                aria-controls="privacy-policy"
                aria-selected="false"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-9">
          <div className="tab-profile-content">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade"
                id="nighthawk"
                role="tabpanel"
                aria-labelledby="nighthawk-tab"
                tabIndex={0}
              >
                Nighthawk
              </div>
              <div
                className="tab-pane fade show active"
                id="maia"
                role="tabpanel"
                aria-labelledby="maia-tab"
                tabIndex={0}
              >
                <div className="qsn-info">
                  <h3>How does MAIA work?</h3>
                  <p>
                    It is magic. MAIA is fine-tuned from GPT-3.5, a language
                    model trained to produce text. MAIA was optimized for
                    dialogue by using Reinforcement Learning with Human Feedback
                    (RLHF) – a method that uses human demonstrations and
                    preference comparisons to guide the model toward desired
                    behavior.
                  </p>
                </div>
                <hr />
                <div className="qsn-info">
                  <h3>Can I trust that MAIA is telling me the truth?</h3>
                  <p>
                    MAIA is not connected to the internet, and can occasionally
                    produce incorrect answers. MAIA has limited knowledge of
                    world and events outside of agronomy and may also
                    occasionally produce wrong answers or biased content. If you
                    find an answer is incorrect, please provide that feedback by
                    using the "Thumbs Down" button.
                  </p>
                </div>
                <hr />
              </div>
              <div
                className="tab-pane fade"
                id="privacy-policy"
                role="tabpanel"
                aria-labelledby="privacy-policy-tab"
                tabIndex={0}
              >
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPopup;
