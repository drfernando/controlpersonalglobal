import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class VacantInfo extends React.Component {
  render() {
    return (
      <div>
        <Row lg={12}>
          <strong className="centered section">
            <h2>INFORMACIÓN DE LA VACANTE</h2>
          </strong>
        </Row>
        <Row lg={12}>
          <Col lg={4}>
            <Row lg={12}>
              <Col>
                <h4>DEDICACIÓN:&nbsp;</h4>
                <p>
                  <span>{this.props.dedication}</span>
                </p>
              </Col>
            </Row>
            <Row lg={12}>
              <Col>
                <h4>MODALIDAD:&nbsp;</h4>
                <p>
                  <span>{this.props.mode}</span>
                </p>
              </Col>
            </Row>
            <Row lg={12}>
              <Col>
                <h4>UBICACIÓN:&nbsp;</h4>
                <p>
                  <span>{this.props.place}</span>
                </p>
              </Col>
            </Row>
            <Row lg={12}>
              <Col>
                <h4>CATEGORIA:&nbsp;</h4>
                <p>
                  <span>{this.props.category}</span>
                </p>
              </Col>
            </Row>
          </Col>
          <Col lg={8}>
            <h4>DESCRIPCIÓN:&nbsp;</h4>
            <p>{this.props.description}</p>
          </Col>
        </Row>
      </div>
    );
  }
}
