import React from 'react';
import {
Tab,
Row,
Col,
Nav,
NavItem
} from 'react-bootstrap';
import FormSale from './form-sale'

class Quote extends React.Component {

  render() {

  return <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="clearfix">
                <Col sm={3}>
                  <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="first">PCB Instant Quote</NavItem>
                    <NavItem eventKey="second">Quote By Sales</NavItem>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content animation>
                    <Tab.Pane eventKey="first">
                      Tab 1 content
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <FormSale />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
          </Tab.Container>;
  }

}

export default Quote;
