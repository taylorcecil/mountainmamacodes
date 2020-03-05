import React from "react";

function Connections(props) {
  const allConnections = props.data.map(connection => {
    return (
      <div className="badge">
        <h3>connection</h3>
        <br />
        <hr />
        <br />
        <p>
          NAME {connection.firstName} {connection.lastName}
          <br />
          EMAIL {connection.email}
          <br />
          BIRTHDAY {connection.dateOfBirth}
          <br />
          PHONE {connection.phone}
          <br />
          JOB TITLE {connection.jobTitle}
          <br />
          NOTES {connection.notes}
        </p>
      </div>
    );
  });

  return <div>{allConnections}</div>;
}

export default Connections;
