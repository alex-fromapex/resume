import React from 'react';
import { connect } from 'react-redux';
import './index.css';

class ContactInfo extends React.Component {
    render() {
        return (
            <div className="contact-info">
                <div className="flex flex-row flex-col-3">
                    <div className="flex flex-column flex-vertical-center">
                        <hr className="flex-no-grow width-90" />
                    </div>
                    <div className="alex-name font-barcode text-center">
                        <h1>Alex</h1>
                        <h2>Watson</h2>
                    </div>
                    <div className="flex flex-column flex-vertical-center">
                        <hr className="flex-no-grow width-90" />
                    </div>
                </div>
                <div className="flex flex-row font-oxygen text-center">
                    <div className="flex-col-3">{ this.props.contactInfo.phoneNumber }</div>
                    <div className="flex-column flex-col-3">
                        <div>
                            { this.props.contactInfo.webURL }
                        </div>
                        <div>
                            { this.props.contactInfo.emailAddress }
                        </div>
                    </div>
                    <div className="flex-col-3">{ this.props.contactInfo.linkedIn }</div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return state.contactInfo;
};

// const mapDispatchToProps = dispatch => bindActionCreators({
//
// });

export default connect(mapStateToProps)(ContactInfo);
