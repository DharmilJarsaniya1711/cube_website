import React, { Fragment } from "react";

const Consultation = (props) => {
  return (
    <Fragment>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="wrapper__contact-form home">
                <h4 className="text-center normal font__size--40 text__40-1024 text__40-md text__40-mm yeseva mb-4">
                  Need a consultation <br /> for your home?
                </h4>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <label htmlFor="" className="font__size--16 text__16-1024 yeseva">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control wrapper__field-input medium font__size--12 text__12-1024"
                        placeholder="Your Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-4">
                      <label htmlFor="" className="font__size--16 text__16-1024 yeseva">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control wrapper__field-input medium font__size--12 text__12-1024"
                        placeholder="Your Email Address"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="" className="font__size--16 text__16-1024 yeseva">
                    Your Email
                  </label>
                  <textarea
                    name=""
                    className="form-control wrapper__field-input textarea medium font__size--12 text__12-1024"
                    placeholder="Write Here"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button className="btn btn__green medium font__size--14 text__14-1024 color__white shadow">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Consultation;
