import React, { Component } from 'react';
import { Row, Col, Card, Icon, PageHeader } from 'antd';

const { Meta } = Card;
export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ backgroundColor: '#000000', color: '#fff' }}>
        <Row type="flex" justify="center">
          <Col lg={24}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '28px',
                marginTop: '20px',
              }}
            >
              Movies 2020
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: '30px' }}>
          <Col span={4} offset={2}>
            <Card
              onClick={() => {}}
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Arrival" description="8.4" />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Arrival" description="8.4" />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Arrival" description="8.4" />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Arrival" description="8.4" />
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              style={{ width: 200 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Arrival" description="8.4" />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default index;
