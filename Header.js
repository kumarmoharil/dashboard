import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    };
  }
  _toggleFunc = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    return (
      <div className="App">
        <div className={"gwos-header fill black"}>
          <div className={"brand-box fill black"}>
            <a>
              <img src={require("./logo.png")} />
              <span className={"white"}>
                Enterprise <strong>Reporting</strong>
              </span>
            </a>
          </div>

          <div className={"controls"}>
            <ul className={"menu dropdown"} />

            <ul className={"menu tool-bar dropdown right"}>
              <li>
                <a href="#" className="button round">
                  <i className="fa fa-th" />
                </a>
              </li>

              <li>
                <a
                  href={"#"}
                  className={"button round user-data"}
                  onHover={this._toggleFunc}
                ><span classname="avatar"><img src="./assets/user.jpg" /></span>
                  Sachin Moharil
                </a>
                {!this.state.isHidden && (
                  <ul className="menu">
                    <li>
                      <a href={"#"}>
                        <i className={"fa fa-cogs"} /> Account Settings
                      </a>
                    </li>
                    <li>
                      <a href={"#"}>
                        <i className={"fa fa-comments"} /> Feedback
                      </a>
                    </li>
                    <li>
                      <a href={"#"}>
                        <i className={"fa fa-question-circle"} /> Help Center
                        &amp; F.A.Q
                      </a>
                    </li>
                    <li>
                      <a href={"#"}>
                        <i className={"fa fa-power-off"} /> Sign Out
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div
          className={"gwos-sub-header fill black marqueetainer"}
          style={{ borderTop: "1px #333 solid", overflow: "hidden" }}
        >
          <div className={"marquee"}>
            <p>
              <i className="fa fa-cog fa-spin" /> REMIDER! Reports need to BE
              DELIVERED TODAT…{" "}
            </p>
            <p className="gw-yellow">
              {" "}
              Remember to label and reports accurately…{" "}
            </p>
            <p>
              Be <b>SURE</b> your <b>DATA</b> <i className="fa fa-table" /> is{" "}
              <b>COMPLETE</b> <i>before</i> exporting!{" "}
            </p>
          </div>
        </div>
        <div className="gwos-body">
          <div className="row">
            <div className="small-24">&nbsp;</div>
          </div>
        </div>
      </div>
    );
  }
}
