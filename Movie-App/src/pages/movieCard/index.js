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
      <div style={{ backgroundColor: '#000000', color: '#fff', maxWidth: '100vw' }}>
        <Row>
          <Col lg={24}>
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
            <Row style={{ marginTop: '30px' }} gutter={[0, 48]}>
              <Col xs={24} sm={24} md={6} lg={6}>
                <Card
                  onClick={() => {}}
                  style={{ marginLeft: '25px', marginRight: '25px' }}
                  hoverable
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
              <Col xs={24} sm={24} md={6} lg={6}>
                <Card
                  hoverable
                  style={{ marginLeft: '25px', marginRight: '25px' }}
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
              <Col xs={24} sm={24} md={6} lg={6}>
                <Card
                  hoverable
                  style={{ marginLeft: '25px', marginRight: '25px' }}
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
              <Col xs={24} sm={24} md={6} lg={6}>
                <Card
                  hoverable
                  style={{ marginLeft: '25px', marginRight: '25px' }}
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
              <Col xs={24} sm={24} md={6} lg={6}>
                <Card
                  hoverable
                  style={{ marginLeft: '25px', marginRight: '25px' }}
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
              <Col xs={24} sm={24} md={6} lg={6}>
                <Card
                  hoverable
                  style={{ marginLeft: '25px', marginRight: '25px' }}
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
              <Col xs={24} sm={24} md={6} lg={6}>
                <Card
                  hoverable
                  style={{ marginLeft: '25px', marginRight: '25px' }}
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
          </Col>
        </Row>
      </div>
    );
  }
}

export default index;
