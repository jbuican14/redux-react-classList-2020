import { combineReducers } from 'redux';

const mathClassReducer = () => {
  //list of song NO CHANGE
  return [
    {
      title: 'Algebra',
      duration: '36:00',
      content:
        'Intended to broaden mathematical knowledge and deepen the systematic and analytic thought processes of technical and non-technical students. Range of topics covered includes functions and graphs, linear and quadratic equations, inequalities, polynomials, rational and irrational expressions, exponents, systems of equations, as well as exponential and logarithmic functions. There is an emphasis on problem-solving skills and how to communicate with mathematical notation',
    },
    {
      title: 'Geometry',
      duration: '36:00',
      content:
        'Geometry is a branch of mathematics that studies the sizes, shapes, positions angles and dimensions of things. Flat shapes like squares, circles, and triangles are a part of flat geometry and are called 2D shapes. These shapes have only 2 dimensions, the length and the width.',
    },
    {
      title: 'Pre-Calculus',
      duration: '56:00',
      content:
        'In mathematics education, precalculus or College algebra is a course, or a set of courses, that includes algebra and trigonometry at a level which is designed to prepare students for the study of calculus. Schools often distinguish between algebra and trigonometry as two separate parts of the coursework.',
    },
    {
      title: 'Calculus',
      duration: '26:00',
      content:
        ' originally called infinitesimal calculus or "the calculus of infinitesimals", is the mathematical study of continuous change, in the same way that geometry is the study of shape and algebra is the study of generalizations of arithmetic operations.',
    },
  ];
};

const selectedMathClassReducer = (selectedMathClass = null, action) => {
  switch (action.type) {
    case 'MATHCLASS_SELECTED':
      return action.payload;
    default:
      return selectedMathClass;
  }
};

export default combineReducers({
  mathClass: mathClassReducer,
  selectedMathClass: selectedMathClassReducer,
});
