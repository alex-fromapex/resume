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
                                    <div className="position" key={emp_idx+'-'+index}>
                                        <div className="employer-name" key={'en-'+index}>
                                            <strong style={{fontWeight:'700'}} key={'st-'+index}>{ employer.name }</strong>
                                            <span key={'pt-'+index}>{ position.positionTitle ? ', '+ position.positionTitle : null }</span>
                                            <span key={'pd-'+index}>{ position.dates ? ', ' + position.dates : null }</span>
                                        </div>
                                        <ul key={'ul-'+index}>
                                            {
                                                position.bullets ? position.bullets.map((bullet,bullet_idx) => {
                                                    return <li key={'pos-'+bullet_idx}>{bullet}</li>
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
