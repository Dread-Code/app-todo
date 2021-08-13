import React, { useContext } from "react";
import { Card, Button } from "semantic-ui-react";
import TodoContext from "../../context/TodoContext";

export const CardComponent = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const endTodo = (index) => {
    dispatch({
      type: "end",
      payload: index,
    });
  };
  return (
    <Card.Group>
      {todos.map((todo, index) => (
        <Card key={todo + index}>
          <Card.Content>
            <Card.Header>{index + 1}</Card.Header>
            <Card.Description>{todo}</Card.Description>
            <br />
            <Button positive onClick={() => endTodo(index)}>
              Finalizar Todo
            </Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};
