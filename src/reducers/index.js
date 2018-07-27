import { combineReducers } from 'redux';
import { contactInfoReducer } from './contactinfo';
import { workHistoryReducer } from './work_history';
import { otherSkillsReducer } from './other_skills';
import { otherExperienceReducer } from './other_experience';
import { educationReducer } from './education';
import { ATSKeywordsReducer } from './ats_keywords';

export default combineReducers({
    ATSkeywords: ATSKeywordsReducer,
    contactInfo: contactInfoReducer,
    workHistory: workHistoryReducer,
    otherSkills: otherSkillsReducer,
    otherExperience: otherExperienceReducer,
    education: educationReducer
});
