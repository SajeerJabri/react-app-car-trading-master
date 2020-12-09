import React from "react";
import "./ReportPage.css";
import Header from "../Header/Header";
import Button from "@material-ui/core/Button";
import { Table, Container } from "react-bootstrap";

const ReportPage = () => {
  return (
    <div className="report__page">
      <Header />
      <div className="time__nav">
        <ul>
          <li>Date</li>
          <li>Date from</li>
          <li>Date to</li>
          <Button variant="outlined" color="primary">
            Search
          </Button>
        </ul>
      </div>
      <div className="report__page_table">
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Interior Marked</th>
                <th>Exterior Marked</th>
                <th>Auction Sheet Marked</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>21/11/2020</td>
                <td>154</td>
                <td>842</td>
                <td>84</td>
              </tr>
              <tr>
                <td>22/11/2020</td>
                <td>718</td>
                <td>584</td>
                <td>412</td>
              </tr>
              <tr>
                <td>25/11/2020</td>
                <td>784</td>
                <td>1104</td>
                <td>472</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default ReportPage;
