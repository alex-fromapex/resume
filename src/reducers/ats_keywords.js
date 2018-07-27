const ATSKeywordsReducer = (previousState, action) => {
    return {
            ...previousState,
            ATSkeywords: [
                'Python',
                'JavaScript',
                'ES7',
                'ES6',
                'Webpack',
                'PHP',
                'Bootstrap',
                'Babel',
                'Gulp',
                'Sass'
            ]
    }
};

export {ATSKeywordsReducer};
