import React from 'react';
import { connect } from 'react-redux';

const MathClassDetail = ({ selectedMathClass }) => {
  //props.selectedMathClass.title etc.
  if (!selectedMathClass) {
    return (
      <div className="class-detail-content">
        <h4 className="class-card-heading">
          Select the class to view a detail:
        </h4>
      </div>
    );
  }
  return (
    <div className="class-detail-content">
      <h4 className="class-card-heading">
        Detail for:
        {selectedMathClass.title}
      </h4>
      <p className="class-card-link">
        Total Hours :{selectedMathClass.duration}
      </p>

      <p>{selectedMathClass.content}</p>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { selectedMathClass: state.selectedMathClass };
};

export default connect(mapStateToProps)(MathClassDetail);
