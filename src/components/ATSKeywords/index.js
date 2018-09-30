import React from 'react';
import './index.css';

class ATSKeywords extends React.Component {
    render() {
        return (
            <p className="ats-keywords">{this.props.keywords.map((keyword) => {
                return keyword+' '
            })}</p>
        );
    }
};

// const mapDispatchToProps = dispatch => bindActionCreators({
//
// });

export default ATSKeywords;
