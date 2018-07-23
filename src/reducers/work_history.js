const workHistoryReducer = (previousState, action) => {
    return {
            ...previousState,
            workHistory: [
                {
                    employer: 'Brooks Bell',
                    description: 'Blah',
                    bullets: [
                        'Successfully developed 40+ A/B tests with ES6/SASS/HTML5 to leverage existing AngularJS 1.5.8 and React web application code and back-end APIs on AmericanExpress.com',
                        'Deploy A/B split test updates daily using a custom-built tool framework that requires Cloud9, AWS, NodeJS, Webpack, SASS, Babel, Git, and Gulp',
                        'On-board/work with dedicated developers, daily agile scrum with project managers to meet strict timelines, manage projects, and mentor junior developers as part of a team servicing the company’s largest client (~$1.5m annual revenue) which gave a 5/5 on the 2018 Q1 client satistifaction survey',
                        'Coordinating both remotely and on-site with, and gathering requirements from various internal American Express teams, third-party vendors, and stakeholders located in Manhattan, NYC office'
                    ]
                },
                {
                    employer: 'Acme',
                    description: 'Acme yawn'
                }
            ]
    }
};

export { workHistoryReducer };
