import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";
import "./ManageProducts.css";

const ManageProduts = () => {
  const [cars, setCars] = useState([]);
  const history = useHistory();

  const url = `http://localhost:5000/cars`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setCars(res.data);
    });
  }, [url]);

  const handleProductDelete = (id) => {
    const url = `http://localhost:5000/cars/${id}`;
    axios.delete(url).then((res) => {
      const data = res.data;
      if (data.acknowledged) {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this Car Details!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            const filterData = cars.filter((item) => item._id !== id);
            setCars(filterData);
            swal("Poof! Your Car Product has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your imaginary file is safe!");
          }
        });
      } else {
        swal(data.message, {
          icon: "error",
        });
      }
    });
  };

  const handleProductEdit = (id) => {
    const uri = `product-edit/${id}`;
    history.push(uri);
  };

  return (
    <Container>
      <h2 className="text-center my-4">Manage Products</h2>
      <div className="table_wrapper my-4">
        <table>
          <thead>
            <tr>
              <th>Car</th>
              <th>Amount</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id + "sodsfsfs"}>
                <td>{car.title}</td>
                <td className="amount">{car.price}</td>
                <td>
                  <Link to="/">View</Link>
                </td>
                <td>
                  <button
                    className="edit_btn"
                    onClick={() => handleProductEdit(car._id)}
                  >
                    edit
                  </button>
                  <button
                    className="delete_btn"
                    onClick={() => handleProductDelete(car._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ManageProduts;