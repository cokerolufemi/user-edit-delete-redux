import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addNote } from "../Action/action";

function Adduser(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNote({
        title: title,
        date: date,
        note: note,
        id: uuid(),
      })
    );

    setTitle("");
    setDate("");
    setNote("");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="Title"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="Date"
          placeholder="Enter Date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Note</Form.Label>
        <Form.Control
          type="Note"
          placeholder="Note"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default Adduser;
