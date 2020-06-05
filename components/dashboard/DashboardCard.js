import React from "react";
//react bootstrap
import { Card, Row, Col } from "react-bootstrap";
//styled components

function DashboardCard(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.data.employee_name}</Card.Title>
        <Card.Text>{props.data.employee_age}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DashboardCard;
