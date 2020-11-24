import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Main extends Component {




    render() {
        const main = this.props.myprojects.map((project) => {

            return (
                <div key={project.id} className="col-12 col-md-5 m-1">
                    <CardImgOverlay>
                        <CardTitle><strong>{project.name}</strong></CardTitle>
                    </CardImgOverlay>
                </div>
            )

        });
        return (


            <div className="container">
                <div className="row">{main}</div>
            </div>
        )

    }
}

export default Main;