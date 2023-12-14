import React from "react";

class Footer extends React.Component {
  #year = new Date(Date.now());
  currentYear = undefined;

  constructor(props) {
    super(props);
    this.currentYear = this.#year.getFullYear();
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <span className="h5 text-white">
          Happy Coding from Artem! @{this.currentYear}
        </span>
      </div>
    );
  }
}

export { Footer };
