import React, { useEffect, useState } from 'react';
import { getTodos, addTodo, deleteTodo, updateTodo } from '../firebase';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Skeleton, LinearProgress, Box, TextField } from '@mui/material';

function TodoComponent() {
  
  // State variables
  //List of todos
  const [todos, setTodos] = useState({});
  //input for new todo
  const [newTodo, setNewTodo] = useState('');
  //is data loading?
  const [loading, setLoading] = useState(true);


  // Fetch todos on component mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        await getTodos(setTodos);
      } catch (error) {
        console.error("Error in fetchTodos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, 
  // [TODO: better explanation] 
  []);

  // adding todo
  const handleAddTodo = () => {
    //looks at new todo, removes whitespace and if it is an empty string
    //nothing happens
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      //sets the input field to empty string
      setNewTodo('');
    }
  };

  //deletes the todo
  const handleDeleteTodo = (key) => {
    deleteTodo(key);
  };

  //updates the todo
  const handleCompleteTodo = (key, todo) => {
    updateTodo(key, { ...todo, completed: !todo.completed });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}> {/* Main container with padding */}
      {loading ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <LinearProgress sx={{ width: '300px', marginBottom: '16px' }} />
          <Box sx={{ width: 300 }}>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" height={118} />
             <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" height={118} />
          </Box>
        </Box>
      ) : (
        <Box sx={{ width: 300 }}> {/* Container for input and button */}
          <TextField
            fullWidth
            label="Enter a new todo..."
            id="new-todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            sx={{ marginBottom: 2 }} // Add margin bottom to the TextField
          />
          <Button variant="contained" onClick={handleAddTodo} fullWidth sx={{marginBottom: 2}}>Add Todo</Button>

          {Object.keys(todos).length === 0 ? (
            <Typography variant="body1" sx={{ mt: 2 }}>No Todos</Typography>
          ) : (
            <Box sx={{ mt: 2 }}> {/* Add margin top to the todo list */}
              {Object.keys(todos).map((key) => (
                <Card
                  key={key}
                  sx={{
                    mb: 1,
                    backgroundColor: todos[key].completed ? '#303030' : 'lightgreen',
                    color: todos[key].completed ? 'white' : 'black',
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ textDecoration: todos[key].completed ? 'line-through' : 'none' }}
                    >
                      {todos[key].text}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between' }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={todos[key].completed}
                          onChange={() => handleCompleteTodo(key, todos[key])}
                          name="completed"
                          sx={{
                            color: todos[key].completed ? 'white' : 'black',
                            '& .MuiSvgIcon-root': { fill: todos[key].completed ? 'white' : 'black' },
                          }}
                        />
                      }
                      label="Completed"
                      sx={{ color: todos[key].completed ? 'white' : 'black' }}
                    />
                    <Button size="small" onClick={() => handleDeleteTodo(key)} sx={{ color: todos[key].completed ? 'white' : 'black' }}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default TodoComponent;