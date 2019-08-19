import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faLaptopCode, faCarBattery } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import content from '../../content';

export class TeamCard extends React.Component {

    icons = {
        Software: faLaptopCode,
        Mechanical: faWrench,
        Electrical: faCarBattery
    }

    render() {
        return (
            <Col>
                <Card className="TeamCard">
                    <Card.Header className="TeamCardHeader">
                        {this.props.team}
                    </Card.Header>
                    <Card.Body>
                        <FontAwesomeIcon className="TeamIconLarge" icon={this.icons[this.props.team]} size="6x" />
                        <Card.Text className="TeamText">
                            {content.teams[this.props.team.toLowerCase()].blurb}
                        </Card.Text>
                        <Button className="SecondaryButton" variant="primary" href={"#" + this.props.team}>
                            Learn More
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export class TeamBody extends React.Component {

    icons = {
        Software: faLaptopCode,
        Mechanical: faWrench,
        Electrical: faCarBattery
    }

    text = {
        Software: "Software Team",
        Mechanical: "Mechanical Team",
        Electrical: "Electrical Team"
    }
    
    items = {
        Software: {
            images: {
                do: ["tensorflow.png", "ros.png", "opencv.png"],
                learn: ["tensorflow.png", "ros.png", "opencv.png"],
            },
            names: {
                do: ["TensorFlow", "ROS", "OpenCV"],
                learn: ["TensorFlow", "ROS", "OpenCV"]
            },
            descriptions: {
                do: ["Data processing and machine learning library", "Robotics operating framework", "Computer vision and image processing library"],
                learn: ["Data processing and machine learning library", "Robotics operating system framework", "Computer vision and image processing library"]
            }
        },
        Electrical: {
            images: {
                do: ["tensorflow.png", "ros.png", "opencv.png"],
                learn: ["tensorflow.png", "ros.png", "opencv.png"],
            },
            names: {
                do: ["TensorFlow", "ROS", "OpenCV"],
                learn: ["TensorFlow", "ROS", "OpenCV"]
            },
            descriptions: {
                do: ["Data processing and machine learning library", "Robotics operating framework", "Computer vision and image processing library"],
                learn: ["Data processing and machine learning library", "Robotics operating system framework", "Computer vision and image processing library"]
            }
        },
        Mechanical: {
            images: {
                do: ["tensorflow.png", "ros.png", "opencv.png"],
                learn: ["tensorflow.png", "ros.png", "opencv.png"],
            },
            names: {
                do: ["TensorFlow", "ROS", "OpenCV"],
                learn: ["TensorFlow", "ROS", "OpenCV"]
            },
            descriptions: {
                do: ["Data processing and machine learning library", "Robotics operating framework", "Computer vision and image processing library"],
                learn: ["Data processing and machine learning library", "Robotics operating system framework", "Computer vision and image processing library"]
            }
        }
    }


    render() {
        return (
            <div>
                <div id={this.props.team} className="HeaderBuffer"></div>
                <Col>
                    <h3 className="TeamBodyHeader my-auto">
                        <FontAwesomeIcon className="TeamIconSmall" icon={this.icons[this.props.team]} size="lg" />
                        {this.text[this.props.team]}
                    </h3>
                    <hr />
                    <Row>
                        <TeamBodyItemList title={"What We Do"} images={this.items[this.props.team].images.do} names={this.items[this.props.team].names.do} descriptions={this.items[this.props.team].descriptions.do} />
                        <TeamBodyItemList title={"What You'll Learn"} images={this.items[this.props.team].images.learn} names={this.items[this.props.team].names.learn} descriptions={this.items[this.props.team].descriptions.learn} />
                    </Row>
                    <div className="TeamBodyText">
                        {content.teams[this.props.team.toLowerCase()].body}
                    </div>
                </Col>
            </div>
        )
    }
}

function TeamBodyItemList(props) {
    return (
        <Col sm={6} >
            <h4 className="text-center">{props.title}</h4>
            <div className="TeamBodyItemFrame">
                <div className="TeamBodyItemContainer">
                    <TeamBodyItem image={props.images[0]} name={props.names[0]} description={props.descriptions[0]} />
                    <TeamBodyItem image={props.images[1]} name={props.names[1]} description={props.descriptions[1]} />
                    <TeamBodyItem image={props.images[2]} name={props.names[2]} description={props.descriptions[2]} />
                </div>
            </div>
        </Col>
    )
}

function TeamBodyItem(props) {
    return (
        <div className="TeamBodyItemContainer">
            <div className="TeamBodyItem">
                <div className="TeamBodyItemIconContainer">
                    <img className="TeamBodyItemIcon" src={process.env.PUBLIC_URL + "/icons/" + props.image} />
                </div>
                <div className="TeamBodyItemTextPrimary">
                    {props.name}
                </div>
                <div className="TeamBodyItemTextSecondary">
                    {props.description}
                </div>
            </div>
        </div>
    )
}
