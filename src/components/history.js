import { Table } from "react-bootstrap";
const GetHistory = () => {
  const usersDataString = localStorage.getItem("historydata");
  const users = JSON.parse(usersDataString);

  return (
    <>
      <div className="container table-responsive">
        <h4>User History</h4>
        <Table striped bordered hover size="lg">
          <thead>
            <tr>
              <th>Products</th>
              <th>Total</th>
              <th>CheckOut DateTime</th>
            </tr>
          </thead>
          <tbody>
            {users
              ? users.map((data) => (
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
  );
};
export default GetHistory;
