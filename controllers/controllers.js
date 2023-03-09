const connection = require("../config/config");

const getStudents = (req, res) => {
  try {
    const query = "SELECT * FROM students";

    connection.query(query, (error, students) => {
      if (error) {
        res.json(error);
        return;
      }
      res.json(students);
    });
  } catch (error) {
    res.json(error);
  }
};

const getStudent = (req, res) => {
  try {
    const students_id = req.params.id;
    const query = `SELECT * FROM students WHERE students_id="${students_id}"`;
    connection.query(query, (error, student) => {
      if (error) {
        res.json(error);
        return;
      }
      res.json(student);
    });
  } catch (error) {
    res.json(error);
  }
};
const createStudent = (req, res) => {
  try {
    const { students_id, name } = req.body;
    console.log(req.body);
    const query = `INSERT INTO students VALUES("${students_id}","${name}" )`;
    connection.query(query, (error, info) => {
      if (error) {
        res.json(error);
        return;
      }
      res.json(info);
    });
  } catch (error) {
    res.json(error);
  }
};
const updateStudent = (req, res) => {
  try {
    const { name } = req.body;
    const students_id = req.params.id;
    const query = `UPDATE students SET students_id="${students_id}" ,name="${name}" WHERE students_id="${students_id}"`;
    connection.query(query, (error, info) => {
      if (error) {
        res.json(error);
        return;
      }
      res.json(info);
    });
  } catch (error) {
    res.json(error);
  }
};
const deleteStudent = (req, res) => {
  try {
    const students_id = req.params.id;
    const query = `DELETE FROM students WHERE students_id="${students_id}"`;
    connection.query(query, (error, info) => {
      if (error) {
        res.json(error);
        return;
      }
      res.json(info);
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = { getStudent, getStudents, createStudent, deleteStudent, updateStudent };