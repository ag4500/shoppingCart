import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { setuser, loggedin, showHide } from "../actions";
import user from "../api/user.json";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, InputGroup } from "react-bootstrap";
const LogIn = () => {
  const dispatch = useDispatch();
  const updateUsers = useSelector((state) => state.login);
  const onSumbit = (e) => {
    e.preventDefault();
    const logIn = user.find(
      (i) => i.username == username && i.password == password
    );
    if (logIn) {
      dispatch(
        loggedin(!updateUsers.loggedIn),
        (updateUsers.data = updateUsers.record)
      );
      dispatch(showHide(!updateUsers.toggle));
    } else {
      alert("please Logged In with valid username and password");
    }
  };
  const handleHideToggle = () => {
    dispatch(showHide(!updateUsers.toggle));
  };
  const { username, password } = updateUsers.data;
  const onChange = (e) => {
    const { name, value } = e.target;
    const addusers = { ...updateUsers.data, [name]: value };
    dispatch(setuser(addusers));
  };
  return (
    <>
      <div className="container p-3 text-center bg-light">
        <Modal show={updateUsers.toggle} onHide={handleHideToggle}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={onSumbit}>
              <InputGroup className=" p-2 -3 ">
                <InputGroup.Text id="basic-addon1">UserName</InputGroup.Text>
                <FormControl
                  type="text"
                  name="username"
                  value={username}
                  onChange={(event) => onChange(event)}
                />
              </InputGroup>
              <InputGroup className="p-2 -3 ">
                <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                <FormControl
                  type="text"
                  name="password"
                  value={password}
                  onChange={(event) => onChange(event)}
                />
              </InputGroup>

              <Modal.Footer>
                <Button variant="success" type="submit">
                  Login
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default LogIn;
