import React from "react"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class VacantOthers extends React.Component{
    render(){
        return(
            <div>
                <Row className="section" lg={12}>
                    <Col sm={12} lg={6}>
                        <Row lg={12}>
                            <strong className="centered"><h2>DEDICACIÓN:</h2></strong>  
                        </Row>  
                        <Row lg={12}>
                            <h4>Horarios de trabajo:</h4> 
                            <p>{this.props.schedule}</p> 
                        </Row>  
                        <Row lg={12}>
                            <h4>Días a laborar:</h4> 
                            <p>{this.props.days}</p> 
                        </Row>    
                        <Row lg={12}>
                            <h4>Modalidad de trabajo:</h4> 
                            <p>{this.props.mode}</p> 
                        </Row>   
                        <Row lg={12}>
                            <Row lg={12}>
                                <h4>Medios de trabajo y comunicación:</h4> 
                            </Row>  
                            <Row lg={12}>  
                                <ol className="orderList" >{this.props.media}</ol> 
                            </Row>
                        </Row>                 
                    </Col>
                    <Col sm={12} lg={6}>
                        <Row lg={12}>
                            <strong className="centered"><h2>INFORMACIÓN EXTRA:</h2></strong>  
                        </Row>   
                        <Row lg={12}>
                            <h4>Requiere presentar prueba técnica:</h4> 
                            <p>{this.props.test}</p> 
                        </Row> 
                    </Col>
                </Row>
            </div>
        )
    }
}