import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import React from 'react';
import './VacantTabs.css';
import VacantTabContent from '../VacantTabContent/VacantTabContent';


export default class VacantTabs extends React.Component{
 
    render(){
      var vacancies = this.props.vacancies.map(function(vacant, i){
        return (
          <Tab className="tab" tabClassName="vacant-link" eventKey={vacant.key} key={i} title={vacant.title}>
              	<VacantTabContent 
                vacant={vacant}
                ></VacantTabContent>
                {/* <div className="vacant-tab-content">{vacant.description}</div> */}
          </Tab>
        );
      });       
        return ( <Tabs
            id="controlled-tab"
            className="mb-3 tabs"
            defaultActiveKey={this.props.vacancies[0].key}
            
          >
          {vacancies}
          </Tabs>);
    }
}