import React from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
class history extends React.Component {
  render() {
    const jsondata = JSON.parse(localStorage.getItem("history"));
    const jsondate = JSON.parse(localStorage.getItem("date"));
    const data = jsondata.data;
    const total = jsondata.total;
    const history = data.map((data) => {
      return (
        <ul key={data.id}>
          {
            <li style={{ listStyleType: "square" }}>
              <ListGroup>
                <ListGroup.Item>
                  {data.title} {data.price} {data.quantity}
                </ListGroup.Item>
              </ListGroup>
            </li>
          }
        </ul>
      );
    });
    return this.props.login.loggedIn ? (
      <>
        <div className="container my-3">
          <h3 className="text-center my-2 text-danger">History...</h3>
          {history}{"  "}
          {total}
          {"  "}
          {jsondate}
        </div>
      </>
    ) : (
      <h4 className="my-3 container text-center">
        Please Logged In to use history
      </h4>
    );
  }
}
const mapStateToProps = (state) => ({
  login: state.login,
});
const usersConnectedWithRedux = connect(mapStateToProps)(history);
export default usersConnectedWithRedux;
