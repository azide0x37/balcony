import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ServerStats from './ServerStats';

class Balcony extends Component {
    constructor(props) {
        super(props)

        this.state = {
            project: {
                title: 'Landing page Design',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                state: 'Completed',
                totalTasks: 210,
                totalTasksCompleted: 121,
                totalComments: 121,
                totalMembers: 12,
                totalHoursSpent: 2500,
                startDate: '17 July 2019',
                startTime: '1:00 PM',
                endDate: '22 July 2019',
                endTime: '1:00 PM',
                totalBudget: '$15,800',
                owner: 'Rick Perry'
            },
            servers_: [{
                name: 'raspi4.k3s.main',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.11",
                cpu: 30,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "3.32 GB",
                description: "k3s master node",
                last_update: 3,
            }],
            servers: [{
                name: 'raspi4.k3s.main',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.11",
                cpu: 30,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "3.32 GB",
                description: "k3s master node",
                last_update: 3,
            }, {
                name: 'raspi4.k3s.worker0',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.12",
                cpu: 99,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "27.11 GB",
                description: "k3s worker node 0",
                last_update: 30,
            }, {
                name: 'raspi4.k3s.worker1',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.13",
                cpu: 16,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "13.23 GB",
                description: "k3s worker node 1",
                last_update: 2,
            }, {
                name: 'raspi4.k3s.worker2',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.14",
                cpu: 23,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "25.23 GB",
                description: "k3s worker node 2",
                last_update: 0,
            }, {
                name: 'raspi4.k3s.worker3',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.15",
                cpu: 55,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "33.12 GB",
                description: "k3s worker node3",
                last_update: 0,
            }, {
                name: 'raspi4.k3s.main',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.11",
                cpu: 30,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "3.32 GB",
                description: "k3s master node",
                last_update: 3,
            }, {
                name: 'raspi4.k3s.worker0',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.12",
                cpu: 99,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "27.11 GB",
                description: "k3s worker node 0",
                last_update: 30,
            }, {
                name: 'raspi4.k3s.worker1',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.13",
                cpu: 16,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "13.23 GB",
                description: "k3s worker node 1",
                last_update: 2,
            }, {
                name: 'raspi4.k3s.worker2',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.14",
                cpu: 23,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "25.23 GB",
                description: "k3s worker node 2",
                last_update: 0,
            }, {
                name: 'raspi4.k3s.worker3',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.15",
                cpu: 55,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "33.12 GB",
                description: "k3s worker node3",
                last_update: 0,
            }, {
                name: 'raspi4.k3s.main',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.11",
                cpu: 30,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "3.32 GB",
                description: "k3s master node",
                last_update: 3,
            }, {
                name: 'raspi4.k3s.worker0',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.12",
                cpu: 99,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "27.11 GB",
                description: "k3s worker node 0",
                last_update: 30,
            }, {
                name: 'raspi4.k3s.worker1',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.13",
                cpu: 16,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "13.23 GB",
                description: "k3s worker node 1",
                last_update: 2,
            }, {
                name: 'raspi4.k3s.worker2',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.14",
                cpu: 23,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "25.23 GB",
                description: "k3s worker node 2",
                last_update: 0,
            }, {
                name: 'raspi4.k3s.worker3',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.15",
                cpu: 55,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "33.12 GB",
                description: "k3s worker node3",
                last_update: 0,
            }, {
                name: 'raspi4.k3s.main',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.11",
                cpu: 30,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "3.32 GB",
                description: "k3s master node",
                last_update: 3,
            }, {
                name: 'raspi4.k3s.worker0',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.12",
                cpu: 99,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "27.11 GB",
                description: "k3s worker node 0",
                last_update: 30,
            }, {
                name: 'raspi4.k3s.worker1',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.13",
                cpu: 16,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "13.23 GB",
                description: "k3s worker node 1",
                last_update: 2,
            }, {
                name: 'raspi4.k3s.worker2',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.14",
                cpu: 23,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "25.23 GB",
                description: "k3s worker node 2",
                last_update: 0,
            }, {
                name: 'raspi4.k3s.worker3',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.15",
                cpu: 55,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "33.12 GB",
                description: "k3s worker node3",
                last_update: 0,
            }, {
                name: 'raspi4.k3s.main',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.11",
                cpu: 30,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "3.32 GB",
                description: "k3s master node",
                last_update: 3,
            }, {
                name: 'raspi4.k3s.worker0',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.12",
                cpu: 99,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "27.11 GB",
                description: "k3s worker node 0",
                last_update: 30,
            }, {
                name: 'raspi4.k3s.worker1',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.13",
                cpu: 16,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "13.23 GB",
                description: "k3s worker node 1",
                last_update: 2,
            }, {
                name: 'raspi4.k3s.worker2',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.14",
                cpu: 23,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "25.23 GB",
                description: "k3s worker node 2",
                last_update: 0,
            }, {
                name: 'raspi4.k3s.worker3',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.15",
                cpu: 55,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "33.12 GB",
                description: "k3s worker node3",
                last_update: 0,
            }, {
                name: 'raspi4.k3s.main',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.11",
                cpu: 30,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "3.32 GB",
                description: "k3s master node",
                last_update: 3,
            }, {
                name: 'raspi4.k3s.worker0',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.12",
                cpu: 99,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "27.11 GB",
                description: "k3s worker node 0",
                last_update: 30,
            }, {
                name: 'raspi4.k3s.worker1',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.13",
                cpu: 16,
                mem: "935 MB",
                swap: "0 bytes",
                storage: "13.23 GB",
                description: "k3s worker node 1",
                last_update: 2,
            }, {
                name: 'raspi4.k3s.worker2',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.14",
                cpu: 23,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "25.23 GB",
                description: "k3s worker node 2",
                last_update: 0,
            }, {
                name: 'raspi4.k3s.worker3',
                shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
                ip: "192.168.1.15",
                cpu: 55,
                mem: "2.32 GB",
                swap: "0 bytes",
                storage: "33.12 GB",
                description: "k3s worker node3",
                last_update: 0,
            }],
            activeTab: 'comments'
        }

        this.toggleTab = this.toggleTab.bind(this);
    }

    /**
     * 
     * @param {*} tab 
     */
    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <Row className="page-title">
                    <Col sm={8} xl={6}>
                        <h4 className="mb-1 mt-0">{`Balcony: All Servers`}</h4>
                    </Col>
                    <Col sm={4} xl={6} className="text-md-right">
                        <div className="btn-group ml-2 d-none d-sm-inline-block">
                            <button type="button" className="btn btn-success btn-sm"><i className="uil uil-edit mr-1"></i>Add Server</button>
                        </div>
                        <div className="btn-group ml-1 d-none d-sm-inline-block">
                            <button type="button" className="btn btn-danger btn-sm"><i className="uil uil-trash-alt mr-1"></i>Delete Server</button>
                        </div>
                    </Col>
                </Row>

                <ServerStats {...this.state} />

            </React.Fragment>
        );
    }
}

export default Balcony;
