import React from 'react';
import './index.css';

class WorkHistory extends React.Component {
    render() {
        return ([
            <h1>{this.props.title ? this.props.title : null}</h1>,
            this.props.workHistory.map((employer,emp_idx) => {
                return (
                    <div className="work-history font-oxygen" key={emp_idx}>
                        {
                            employer.positionsHeld.map((position, index) => {
                                return (
                                    <div className="position" key="{index}">
                                        <div className="employer-name">
                                            <strong style={{fontWeight:'700'}}>{ employer.name }</strong>
                                            { position.positionTitle ? ', '+ position.positionTitle : null }
                                            { position.dates ? ', ' + position.dates : null }
                                        </div>
                                        <ul>
                                            {
                                                position.bullets ? position.bullets.map((bullet,bullet_idx) => {
                                                    return <li key={bullet_idx}>{bullet}</li>
                                                }) : ''
                                            }
                                        </ul>
                                    </div>
                                )
                            }
                        )}
                    </div>
                );
            })
        ])
    }
};



// const mapDispatchToProps = dispatch => bindActionCreators({
//
// });

export default WorkHistory;
