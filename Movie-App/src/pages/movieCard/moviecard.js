import React, { Component } from 'react';
import { Row, Col, Card, Icon,Rate,Tag ,PageHeader,Modal, Button } from 'antd';
//import styles from './movie.css';
import Styles from '../moviecard.css';

const { Meta } = Card;
class movie extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          width={900}

        >
        <Row style={{marginTop: '30px'}}>

          <Col lg={24}>
            <img alt="example" style={{width: '100%',height:'300px'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
    
            <Meta style={{marginTop: '15px'}} title="Europe Street beat" description={
                <div>
                  <div className={Styles.movieTitle}>Action / Adventure / Comedy</div>
                  <Rate defaultValue={4} allowHalf count={10} disabled/>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>

                </div>
                      
            } />
            <div className="additional">
              <h2 className={Styles.movieHeader}>Details</h2>
               <p className={Styles.movieTitle}>Official Site: <span className={Styles.movieContent}>Official Facebook</span></p>
               <p className={Styles.movieTitle}>Author: <span className={Styles.movieContent}>USA</span></p>
               <p className={Styles.movieTitle}>Release Date: <span className={Styles.movieContent}>26 July 2021 (USA)</span></p>
               <p className={Styles.movieTitle}>Also Known As: <span className={Styles.movieContent}>The Boys</span></p>
               <p className={Styles.movieTitle}>Filming Locations: <span className={Styles.movieContent}> Hamilton, Ontario, Canada</span></p>
              
            </div>

          </Col>

        </Row>

        </Modal>
      </>

    );
  }
}

export default movie;