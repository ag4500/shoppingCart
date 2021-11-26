import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
const GetHistory = () => {
  const data=useSelector((state)=>state.login)
  const productsDataString = localStorage.getItem("historydata");
  const products = JSON.parse(productsDataString);

  return data.loggedIn ?(
    <>
      <div className="container ">
        <h4>Product History</h4>
        <Table striped bordered hover size="lg">
          <thead>
            <tr>
              <th>Products</th>
              <th>Total</th>
              <th>CheckOut DateTime</th>
            </tr>
          </thead>
          <tbody>
            {products
              ? products.map((data) => (
                  <tr key={data.id}>
                    <td>
                      {data.product.map((i) => (
                        <>
                          <td>"Name" : {i.title},</td>
                          <td>"Price" :{i.price},</td>
                          <td>"Quantity" {i.quantity}</td>
                        </>
                      ))}
                    </td>
                    <td>{data.date}</td>
                    <td>{data.total}</td>
                  </tr>
                ))
              : "No History Available"}
          </tbody>
        </Table>
      </div>
    </>
  ):<span className="mx-3 container">Please LogIn to use History</span>;
};
export default GetHistory;
