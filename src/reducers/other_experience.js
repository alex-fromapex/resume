const otherExperienceReducer = (previousState, action) => {
    return {
        ...previousState,
        otherExperience: [{
            name:'Young Professional Civitan',
            positionsHeld:[{
                positionTitle: 'Volunteer',
                dates: '2016-Present',
                bullets: [
                    'Supported Special Olympics athletes during cycling events, including awards ceremonies, for 2016 and 2017 events',
                    'Raised several thousand dollars for charities working as merchant volunteer at Walnut Creek, Duke concessions, and other philanthropic events'
                ]
            }]
        }]
    }
};

export { otherExperienceReducer };
