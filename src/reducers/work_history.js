const workHistoryReducer = (previousState, action) => {
    return {
            ...previousState,
            workHistory: [
                {
                    name: 'Brooks Bell',
                    positionsHeld: [{
                        positionTitle: 'Optimization Engineer',
                        description: 'Description',
                        dates: '2017-Present',
                        bullets: [
                            'Successfully developed 40+ A/B tests with ES6/SASS/HTML5 to leverage existing AngularJS 1.5.8 and React web application code and back-end APIs on AmericanExpress.com',
                            'Deploy A/B split test updates daily using a custom-built tool framework that requires Cloud9, AWS, NodeJS, Webpack, SASS, Babel, Git, and Gulp',
                            'On-board/work with dedicated developers, daily agile scrum with project managers to meet strict timelines, manage projects, and mentor junior developers as part of a team servicing the company’s largest client (~$1.5m annual revenue) which gave a 5/5 on the 2018 Q1 client satistifaction survey',
                            'Coordinating both remotely and on-site with, and gathering requirements from various internal American Express teams, third-party vendors, and stakeholders located in Manhattan, NYC office'
                        ]
                    }]
                },
                {
                    name: 'NIEHS/NIH',
                    positionsHeld: [
                        {
                            positionTitle: 'IRTA Fellow',
                            description: 'Position Description',
                            dates: '6/2011-8/2011 and 6/2012-8/2012',
                            bullets: [
                                'Developed Java-based software plug-ins for ImageJ software to assist with processing high-resolution confocal microscopy image assets for use in scientific studies',
                                'Created standard operating procedures and online documentation for use of software by researchers in the microscope laboratory and Laboratory of Signal Transduction',
                                'Presented various software applications and their impact on research at annual poster presentation'
                            ]
                        }
                    ]

                }
            ]
    }
};

export { workHistoryReducer };
