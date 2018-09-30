const workHistoryReducer = (previousState, action) => {
    return {
            ...previousState,
            workHistory: [
                {
                    name: 'Brooks Bell',
                    positionsHeld: [{
                            positionTitle: 'Dedicated Optimization Engineer, AmericanExpress.com',
                            description: '',
                            dates: '2017-Present',
                            bullets: [
                                'Successfully developed 40+ A/B tests with Webpack/ES6/SCSS/HTML5, leveraging existing AngularJS 1.5.8 and React 16/Redux/React Router web application codebase and back-end APIs for AmericanExpress.com Product team, and Consumer Marketing Services team',
                                'Deploy A/B split test updates continuously using custom-built tooling framework that incorporates Cloud9, AWS, NodeJS, Webpack 4, SCSS, Babel 7, Git, and Gulp',
                                'On-board/work with dedicated developers, daily agile scrum with project managers to meet strict timelines, manage projects, and mentor junior developers, as part of a team servicing Brooks Bell’s largest client (~$1.5m annual revenue) receiving 5/5 on client satistifaction survey',
                                'Coordinating both remotely and on-site with, and gathering requirements from various internal American Express teams, third-party vendors, and executive stakeholders located in Manhattan, NYC office'
                            ]
                        },
                        {
                            positionTitle: 'Marketing DevOps & Optimization Engineer',
                            description: '',
                            dates: '2013-2017',
                            bullets: [
                                'Dual role with time (40 hrs/week) evenly divided between marketing dev ops duties and developing front-end A/B tests for various clients',
                                'Primary Server and database administrator of BrooksBell.com LAMP stack',
                                'Co-architect of MySQL database schema for company\'s first public product (brooksbell.com/illuminate)',
                                'Assisted with Illuminate product development (brooksbell.com/illuminate) using React+Redux, Bulma, ES6, Webpack, Git, BitBucket',
                                'Configured CloudFlare, HTTPS, MySQL, and various Apache settings to optimize server performance',
                                'Developed responsive PHP/WordPress/Bootstrap landing pages, CRM integrations via Python/PHP, Click Summit annual conference website template, and various ad hoc web apps to assist the marketing team with gathering new leads'
                            ]
                        }
                    ]
                },
                {
                    name: 'NIEHS/NIH',
                    positionsHeld: [
                        {
                            positionTitle: 'IRTA Fellow',
                            description: 'Position Description',
                            dates: '6/2011-8/2011 and 6/2012-8/2012',
                            bullets: [
                                'Developed Java-based software plug-ins for ImageJ software to assist with processing high-resolution confocal microscopy image assets for use in scientific research',
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
