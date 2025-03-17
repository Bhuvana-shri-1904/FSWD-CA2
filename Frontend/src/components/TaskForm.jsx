import React, { useState } from 'react'

const TaskForm = ({ tasks }) => {
  const [Task, setTask] = useState(tasks);
  const [searchQuery, setSearchQuery] = useState('');
  const [newTask, SetNewTask] = useState({
    title: '',
    priority: '',
    due: ''
  });
  const [filteredTasks, setFilteredTasks] = useState(songs);

  // Handle input changes
  const handleChange = (e) => {
    SetNewTask({ ...newTask, [e.target.name]: e.target.value });
  }

  // Handle adding new song
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...task, newTask]);
    setFilteredTask([...Task, newTask]); // Update filtered tasks as well
    SetNewSong({
      title: '',
      priority: '',
      due: ''
    });
  }

  // Sort the songs
  const handleSort = (sortBy) => {
    const sortedTasks = [...task].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1;
      if (a[sortBy] > b[sortBy]) return 1;
      return 0;
    });
    setTask(sortedTasks);
    setFilteredTasks(sortedTasks); // Also update the filtered list after sorting
  }

  // Handle deleting a song
  const handleDelete = (index) => {
    const temp = [...Task];
    temp.splice(index, 1);
    setTask(temp);
    setFilteredTask(temp); // Update filtered task after deletion
  }

  const handle = ()=>{
    const temp =[...Task]
    const final = temp.filter((item)=>item.age>=30) 
    setTask(final)
    setFilteredTask(final)

  }

  // Handle editing a task
  const handleEdit = (index) => {
    SetNewTask({
      title: Task[index].title,
      artist: Task[index].priority,
      duration: Task[index].due
    });

    // Update the Task list with the edited task
    const temp = [...Task];
    temp[index] = newTask;
    setTask(temp);
    setFilteredTask(temp);
  }

  // Handle search functionality
  const handleSearch = () => {
    const filtered = task.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.priority.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.due.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSongs(filtered); // Set the filtered task list based on search
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          value={newSong.title}
        />
        <input
          type="text"
          placeholder="priority"
          name="priority"
          onChange={handleChange}
          value={newTask.priority}
        />
        <input
          type="text"
          placeholder="due"
          name="due"
          onChange={handleChange}
          value={newTask.due}
        />
        <button>Add Task</button>
      </form>

      {/* Search functionality */}
      /* <div>
        <input
          type="text"
          placeholder="Search task by title, priority, or due"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Sort the songs */}
      /* <div>
        <button onClick={() => handleSort('Title')}>Sort by Title</button>
        <button onClick={() => handleSort('Priority')}>Sort by Priority</button>
      </div> */

      /* <h1>Task list</h1>
      {filteredTask.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <h3>{item.artist}</h3>
          <h4>{item.duration}</h4>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={handle}>sort</button> */
        /* </div>
      ))}
    </div>
  )
}

export default TaskForm;