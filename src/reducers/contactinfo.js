const contactInfoReducer = (previousState, action) => {
    return {
            ...previousState,
            contactInfo: {
                phoneNumber: `${Math.sqrt(844561)}-${Math.sqrt(547600)}-9221`,
                linkedIn: 'linkedin.com/in/alexwats0n',
                webURL: 'alexfromapex.github.io',
                emailAddress: '\x61\x6C\x65\x78\x66\x72\x6F\x6D\x61\x70\x65\x78\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D'
            }
    }
};

export {contactInfoReducer};
