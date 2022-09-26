import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editNote } from "../Action/action";

function EditNote({ hide, editinfo }) {
  const [title, setTitle] = useState(editinfo.title);
  const [date, setDate] = useState(editinfo.date);
  const [note, setNote] = useState(editinfo.note);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editNote({
        id: editinfo.id,
        title,
        date,
        note,
      })
    );
    hide();
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
          type="text"
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

      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default EditNote;
