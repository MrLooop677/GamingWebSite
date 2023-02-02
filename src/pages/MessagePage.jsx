import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessage,
  deteteMessage,
  fetchFormData,
} from "../RTK/contactSlice";

const MessagePage = () => {
  const { formData } = useSelector((state) => state.contactSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFormData());
  }, [dispatch]);
  return (
    <>
      <div className="cart mt-5 py-5">
        {formData.length ? (
          <Container className="py-5">
            <h2>Hello In Message</h2>

            <Button variant="primary" onClick={() => dispatch(clearMessage())}>
              Clear Message
            </Button>

            <Table
              striped
              bordered
              hover
              variant="dark"
              className="my-3 text-center"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {formData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.userName}</td>
                    <td>{user.email}</td>

                    <td>{user.message}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => dispatch(deteteMessage(user.id))}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        ) : (
          <p>Not Existing Message </p>
        )}
      </div>
    </>
  );
};

export default MessagePage;
