import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// icons
import FolderIcon from "@mui/icons-material/Folder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td className="">{props.record.position}</td>
    <td className="">{props.record.level}</td>
    <td className="d-flex justify-content-around">
      <Link
        className="btn btn-sm btn-primary"
        title="edit"
        to={`/record/edit/${props.record._id}`}
      >
        <EditIcon fontSize="sm" />
      </Link>
      <button
        className="btn btn-sm btn-danger"
        title="delete"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        <DeleteIcon fontSize="sm" />
      </button>
    </td>
  </tr>
);

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`https://matt-tv-backend.onrender.com/record`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/record/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div className="container mt-5 p-3">
      <div className="border p-3 my-2">
        <div className="d-flex justify-content-between py-2">
        <h6>Record List</h6>
        <Link className="btn btn-sm btn-success" to={"./create"}>
          create new Record
        </Link>
        </div>
        <input
          className="form-control"
          type="search"
          name="searchTable"
          id="searchTable"
          placeholder="search records"
        />
        <table
          className="table table-striped table-hover table-dark table-bordered table-sm"
          style={{ marginTop: 20 }}
        >
          <thead className="text-center">
            <tr>
              <th>Name</th>
              <th className="">Position</th>
              <th className="">Level</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{recordList()}</tbody>
        </table>
      </div>
    </div>
  );
}
