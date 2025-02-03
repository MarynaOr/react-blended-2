import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import TodoListItem from "../TodoListItem/TodoListItem";





const TodoList = ({todos, deleteTodos}) => {
  return (
    <Grid>
        {
            todos.map((todo) => (
                <GridItem key={todo.id}>
                    <TodoListItem todo={todo} />
                </GridItem>
            ))
        }
    </Grid>
  );
};

export default TodoList;
