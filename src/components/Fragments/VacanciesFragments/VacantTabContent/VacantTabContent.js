import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./VacantTabContent.css";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import VacantInfo from "../VacantInfo/VacantInfo";
import VacantSkills from "../VacantSkills/VacantSkills";
import VacantOthers from "../VacantOthers/VacantOthers";
import VacantModal from "../VacantModal/VacantModal";

export default class VacantTabContent extends React.Component{
    
    render(){
        
        var skills = this.props.vacant.skills.map(function(skill, i){
            var buttonColor;
            if (i===0) 
                buttonColor = "primary";
            else if((i - 1).toString().includes("0"))
                buttonColor = "secondary";
            else if((i - 2).toString().includes("0"))
                buttonColor = "success";
            else if((i - 3).toString().includes("0"))
                buttonColor = "warning";
            else if((i - 4).toString().includes("0"))
                buttonColor = "danger";
            else if((i - 5).toString().includes("0"))
                buttonColor = "light";
            else if((i - 6).toString().includes("0"))
                buttonColor = "info";
            else if((i - 7).toString().includes("0"))
                buttonColor = "dark";
            else if((i - 8).toString().includes("0"))
                buttonColor = "outline-dark";                                
            else if((i - 9).toString().includes("0"))
                buttonColor = "outline-info";                                
            
            const renderTooltip = (props) => (
                <Tooltip  {...props}>
                  {skill.description}
                </Tooltip>
              );
            return(<Col sm={1} md={2} lg={3} key={i}><OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              ><Button  variant={buttonColor} >{skill.name}</Button>
              </OverlayTrigger></Col>);
        });
        var activities = this.props.vacant.activities.map(function(activity, i){
            return(<li key={i}>{activity}</li>);
        });
        var technical = this.props.vacant.soft.map(function(tk, i){
            return(<li key={i}>{tk}</li>);
        });
        var soft = this.props.vacant.soft.map(function(sk, i){
            return(<li key={i}>{sk}</li>);
        });
        var language = this.props.vacant.language.map(function(lg, i){
            return(<li key={i}>{lg}</li>);
        });
        var media = this.props.vacant.media.map(function(md, i){
            return(<li key={i}>{md}</li>);
        });
        var test = "No";
        if(this.props.vacant.test)
            test = "Si";
        return(
            <Container fluid className="vacant-tab-content">
                <VacantInfo 
                dedication={this.props.vacant.dedication}
                mode={this.props.vacant.mode}
                place={this.props.vacant.place}
                category={this.props.vacant.category}
                description={this.props.vacant.description}
                /> 
                <VacantSkills
                skills={skills}
                activities={activities}
                profession={this.props.vacant.profession}
                experience={this.props.vacant.experience}
                language={language}
                technical={technical}
                soft={soft}
                />              
                <VacantOthers
                schedule={this.props.vacant.schedule}
                days={this.props.vacant.days}
                mode={this.props.vacant.mode}
                media={media}
                test={test}
                />  
                <VacantModal
                    vacant={this.props.vacant}
                />                
                     
            </Container>
        );
    }
}