const express = require("express");
const { getStudents, getStudent, createStudent, updateStudent, deleteStudent } = require("./controllers/controllers");
const app = express();
app.use(express.json())


app.use(express.json())

app.get('/students', getStudents)
app.get('/students/:id',getStudent)
app.post('/students', createStudent)
app.put('/students/:id', updateStudent)
app.delete('/students/:id', deleteStudent)

app.listen(4000, () => {
  console.log("Server up and running");
});
