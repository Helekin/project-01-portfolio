import React from "react";

const Contact = () => {
  return (
    <div className="text-bg-dark bg-gradient py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="text-center mb-5">
              <h4 className="text-uppercase fw-bold text-primary">Contact</h4>
              <hr className="w-25 mx-auto" />
              <h2 className="mb-4">te</h2>
              <p className="lead">ddd</p>
            </div>
            <form>
              <div className="mb-5">
                <input
                  type="text"
                  className="form-control bg-transparent"
                  name="name"
                  placeholder="Name"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
