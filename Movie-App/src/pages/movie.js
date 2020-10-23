import React, { Component } from 'react';
import { Row, Col, Card, Icon, PageHeader, Modal, Button } from 'antd';
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
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
          >
            <Card
                hoverable
                cover={
                  <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Modal>
        </>
    );
  }
}

export default movie;
