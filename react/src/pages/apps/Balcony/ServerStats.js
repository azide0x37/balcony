import React from 'react';
import { Row, Col, Card, CardText, Badge } from 'reactstrap';

import StatisticsChartWidget from '../../../components/StatisticsChartWidget';

const ServerStats = (props) => {
  const bgClass = "p-0 mt-0 mb-1"
  return (
    <React.Fragment>
      {props.servers.map((server) => {
        return <Row className="pb-3 mb-0">
          <Card className="m-0 p-0" body color={server.last_update > 15 ? "danger" : "light"}>

            <CardText className="p-0 m-0 ml-1">
              <Badge color={"secondary"} className="mr-2">{server.name}</Badge>
              <Badge color={"primary"} className="mr-2">{server.ip}</Badge>
              <Badge color={"warning"} className="mr-2">{server.description}</Badge>
              <Badge color={server.last_update > 15 ? "danger" : "success"} className="mr-2">Last updated {server.last_update} mins ago</Badge>
            </CardText>
            <Row className="p-0 m-0">
              {/* CPU */}
              <Col className="px-1 pt-1 pb-0 m-0" sm={6} md={6} xl={3}>
                <StatisticsChartWidget
                  bgClass={bgClass}
                  description="CPU"
                  title={`${server.cpu}%`}
                  data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                  trend={{
                    textClass: 'text-success',
                    icon: 'uil uil-arrow-up',
                    value: '10.21%'
                  }}></StatisticsChartWidget>
              </Col>
              {/* RAM */}
              <Col className="px-1 pt-1 pb-0 m-0" sm={6} md={6} xl={3}>
                <StatisticsChartWidget
                  bgClass={bgClass}
                  description="Memory"
                  title={server.mem}
                  colors={['#f77e53']}
                  data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                  trend={{
                    textClass: 'text-danger',
                    icon: 'uil uil-arrow-down',
                    value: '5.05%'
                  }}></StatisticsChartWidget>
              </Col>
              {/* Swap */}
              <Col className="px-1 pt-1 pb-0 m-0" sm={6} md={6} xl={3}>
                <StatisticsChartWidget
                  bgClass={bgClass}
                  description="Swap"
                  title={server.swap}
                  colors={['#43d39e']}
                  data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                  trend={{
                    textClass: 'text-success',
                    icon: 'uil uil-arrow-up',
                    value: '25.16%'
                  }}></StatisticsChartWidget>
              </Col>
              {/* Storage */}
              <Col className="px-1 pt-1 pb-0 m-0" sm={6} md={6} xl={3}>
                <StatisticsChartWidget
                  bgClass={bgClass}
                  description="Storage"
                  title={server.storage}
                  colors={['#ffbe0b']}
                  data={[25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54]}
                  trend={{
                    textClass: 'text-danger',
                    icon: 'uil uil-arrow-down',
                    value: '5.05%'
                  }}></StatisticsChartWidget>
              </Col>
            </Row>
          </Card>
        </Row>
      })}
    </React.Fragment>
  );
};

export default ServerStats;
