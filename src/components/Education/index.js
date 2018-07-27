import React from 'react';
import './index.css';

class Education extends React.Component {
    render() {
        return (
            <div class="education">
                <h1>Education</h1>
                <p>{this.props.education}</p>
            </div>)
    }
};



// const mapDispatchToProps = dispatch => bindActionCreators({
//
// });

export default Education;
