import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

const TableComponent = () => {
  const rows = [
    {
      question: "What is React?",
      category: "Frontend",
      answer: "A JavaScript library for building UI",
    },
    {
      question: "What is Material-UI?",
      category: "UI Framework",
      answer: "A React-based UI component library",
    },
    {
      question: "What is JSX?",
      category: "Frontend",
      answer: "A syntax extension for JavaScript",
    },
  ];

  const handleEdit = (index) => {
    console.log("Edit row:", index);
  }

  const handleDelete = (index) => {
    console.log("Delete row:", index);
  }

  return(
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Question</strong></TableCell>
            <TableCell><strong>Question Category</strong></TableCell>
            <TableCell><strong>Answer</strong></TableCell>
            <TableCell><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.question}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.answer}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => handleEdit(index)}
                  style={{ marginRight: "8px" }}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;