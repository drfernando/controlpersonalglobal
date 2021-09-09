import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class VacantSkills extends React.Component{
    render(){
        return(
            <div>
                <Row className="centered section" lg={12}>
                    <strong><h2>HABILIDADES REQUERIDAS</h2></strong>
                </Row>
                <Row className="centered skill-container" sm={6} lg={12}>
                    {this.props.skills}
                </Row>
                <Row lg={6}>
                    <Col sm={12} lg={6}>
                        <Row lg={12}>
                            <h4>Actividades a realizar:</h4>
                        </Row>
                        <Row lg={12}>                
                            <ol className="orderList" > 
                                {this.props.activities}                       
                            </ol>
                        </Row>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Row lg={12}>
                            <h4>Profesión:</h4>
                            <p>{this.props.profession}</p>
                        </Row>
                        <Row lg={12}>
                            <h4>Experiencia:</h4>
                            <p>{this.props.experience}</p>
                        </Row>
                        <Row lg={12}>
                            <h4>Idiomas:</h4>                            
                        </Row>
                        <Row lg={12}>
                            <ol className="orderList" >
                                {this.props.language}
                            </ol>
                        </Row> 
                    </Col>
                </Row>
                <Row lg={12}>
                    <Col sm={12} lg={6}>
                        <Row lg={12}>
                            <h4>Habilidades técnicas requeridas:</h4>                            
                        </Row>
                        <Row lg={12}>
                            <ol className="orderList" >
                                {this.props.technical}
                            </ol>
                        </Row>                        
                    </Col>  
                    <Col sm={12} lg={6}>
                        <Row lg={12}>
                         <h4>Habilidades blandas:</h4>                           
                        </Row>
                        <Row lg={12}>
                            <ol className="orderList" >
                                {this.props.soft}
                            </ol>
                        </Row> 
                    </Col>                    
                </Row>
            </div>
        )
    }
}