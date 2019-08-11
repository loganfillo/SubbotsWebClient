import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import content from '../../content';
import constants from '../../js/constants';
import { TeamCard, TeamBody } from './Components';
import { ViewHeader, ViewContainer } from '../../components';
import './styles.scss';

export default class Teams extends React.Component {

    render() {
        return (
            <ViewContainer>
                <ViewHeader title={content.teams.title} blurb={content.teams.blurb} />
                    <Row>
                        <Col sm={2}></Col>
                        <Col sm={8}>
                            <Row>
                                <TeamCard team={'Software'} />
                                <TeamCard team={'Electrical'} />
                                <TeamCard team={'Mechanical'} />
                            </Row>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                <div className="SeperatorTop"></div>
                <div className="TeamBodyContainer">
                    <TeamBody team={'Software'} />
                    <TeamBody team={'Electrical'} />
                    <TeamBody team={'Mechanical'} />
                </div>
                <div className="SeperatorBottom"></div>
            </ViewContainer>
        )
    }
}
