import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { connect, useDispatch } from "react-redux";
import { deleteNote } from "../Action/action";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Form from "./Form";

function User(props) {
  const dispatch = useDispatch();
  const [editinfo, seteditinfo] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    seteditinfo(data);
    setShow(true);
  };

  return (
    <div>
      {" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form editinfo={editinfo} hide={handleClose} />
        </Modal.Body>
      </Modal>
      {props.notes.map((note, index) => {
        return (
          <Card key={note.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Note Details</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Title:{note.title}</ListGroup.Item>
              <ListGroup.Item>Date: {note.date}</ListGroup.Item>
              <ListGroup.Item>Note: {note.note}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button
                size="sm"
                variant="danger"
                onClick={() => dispatch(deleteNote(note.id))}
              >
                Delete Note
              </Button>
              <Button size="sm" variant="info" onClick={() => handleShow(note)}>
                Edit Note
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { notes: state.notes };
};
export default connect(mapStateToProps)(User);
