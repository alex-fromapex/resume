import React from 'react';
import './index.css';

class ContactInfo extends React.Component {
    render() {
        return (
            <div className="contact-info font-oxygen">
                <div className="flex-row">
                    <div className="flex-vertical-center dividers flex-center">
                        { this.props.contactInfo.phoneNumber }
                    </div>
                    <div className="flex-column alex-name text-center">
                        <h1 className="font-barcode">Alex</h1>
                        <h2 className="font-barcode">Watson</h2>
                        <div>
                            { this.props.contactInfo.webURL }
                        </div>
                        <div>
                            { this.props.contactInfo.emailAddress }
                        </div>
                    </div>
                    <div className="flex-vertical-center dividers flex-center">
                        { this.props.contactInfo.linkedIn }
                    </div>
                </div>
            </div>
        );
    }
};

// const mapDispatchToProps = dispatch => bindActionCreators({
//
// });

export default ContactInfo;
