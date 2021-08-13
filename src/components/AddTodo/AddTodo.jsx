import React, { useContext } from "react";
import { Button, Form } from "semantic-ui-react";
import TodoContext from "../../context/TodoContext";
import { useForm } from "../../hooks/useForm/useForm";

export const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);

  const [values, handleInputChange, reset] = useForm({
    addTodo: "",
  });

  const handleOnSubmit = () => {
    dispatch({
      type: "add",
      payload: values.addTodo,
    });
    reset();
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field>
          <input
            placeholder="Add todo..."
            name="addTodo"
            onChange={handleInputChange}
            value={values.addTodo}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
