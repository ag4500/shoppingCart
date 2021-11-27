import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
const GetHistory = () => {
  const islogin = useSelector((state) => state.login);
  const productsDataString = localStorage.getItem("historydata");
  const products = JSON.parse(productsDataString);

  return islogin.loggedIn ? (
    <>
      <div className="container ">
        <h4 className="text-center my-4">Product History</h4>
        <Table striped bordered hover size="lg">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Products Detail</th>
              <th>Total</th>
              <th>CheckOut DateTime</th>
            </tr>
          </thead>
          <tbody>
            {products
              ? products.map((data, index) => (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td>
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.product.map((i) => (
                            <tr>
                              <td>{i.title}</td>
                              <td>{i.quantity}</td>
                              <td>{i.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </td>
                    <td>{data.total}</td>
                    <td>{data.date}</td>
                  </tr>
                ))
              : "No History Available"}
          </tbody>
        </Table>
      </div>
    </>
  ) : (
    <span className="mx-3 container">Please LogIn to use History</span>
  );
};
export default GetHistory;
