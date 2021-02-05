import React from 'react'
import { Row, Col, Card, Container, ProgressBar } from 'react-bootstrap'

export default function PokemonData(props) {
    return (
        <div>
            <Container className="mt-2">
                <Row>
                    <Col xs={12} md={6}>
                        <Card>
                            <Card.Header>
                                <img src={props.sprite} alt="" />
                                <Card.Title>{props.name}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <h5>Abilities</h5>
                                {props.abilities.map((ability, key) => (
                                    <div key={key}>
                                        <span>{ability.ability.name}</span>
                                    </div>
                                ))}
                                <h5>Types</h5>
                                {props.types.map((type, key) => (
                                    <div key={key}>
                                        <span>{type.type.name}</span>
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <Card>
                            <h4>Base Stats</h4>
                            {props.stats.map((stat, key) => (
                                <div key={key}>
                                    <strong>{stat.stat.name}</strong>
                                    <ProgressBar animated now={stat.base_stat} max={255} label={stat.base_stat} />
                                </div>
                            ))}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
