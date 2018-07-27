const educationReducer = (previousState, action) => {
    return {
            ...previousState,
            education: ['B.S. Computer Science, East Carolina University']
    }
};

export { educationReducer };
