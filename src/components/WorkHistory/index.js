import React from 'react';
import { connect } from 'react-redux';
import './index.css';

class WorkHistory extends React.Component {
    render() {
        return (
            <div className="work-history">
                { this.props.workHistory.map((job) => {
                    return (
                        <div>
                            <div>{ job.employer }</div>
                            <div>{ job.description }</div>
                            <ul>
                                { job.bullets ? job.bullets.map((bullet) => {
                                    return <li>{JSON.stringify(bullet)}</li>
                                }) : ''
                                }
                            </ul>
                        </div>
                    )
                })}
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return state.workHistory;
};

// const mapDispatchToProps = dispatch => bindActionCreators({
//
// });

export default connect(mapStateToProps)(WorkHistory);
