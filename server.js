const express = require("express");
const server = express();
server.use(express.json())
const classlist = [
  { id: 1, name: "Erick" },
  { id: 2, name: "Mathenge" },
  { id: 3, name: "Amos" },
];

server.get("/class", (req, res) => {
  res.send(classlist);
});

server.post("/class", (req, res) => {
  try {
    classlist.push(req.body)
    res.send(classlist)
  } catch (error) {
    console.error(error);
  }
});


server.get("/class/:id", (req, res)=>{
  const id = req.params.id


  const person = classlist.filter(person=>{
    return person.id == id
  })
  res.send(person)
})

server.listen(4000, () => {
  console.log("Server up and running");
});
