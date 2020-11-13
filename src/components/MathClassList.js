import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMathClass } from '../actions';

class MathClassList extends Component {
  k;
  renderMathClass() {
    return this.props.mathClass.map((name, idx) => {
      return (
        <div className="class-card" key={idx}>
          <i className="fas fa-book"></i>

          <div className="class-card-content">
            <h4 className="class-card-heading">{name.title}</h4>
            <p className="class-card-link">Total Hours : {name.duration}</p>
            <button
              className="class-card-button"
              onClick={() => this.props.selectMathClass(name)}
            >
              See More
              <i className="fas fa-angle-double-right btn-arrow"> </i>
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);

    return (
      <div className="classes-cards-wrapper">{this.renderMathClass()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state);
  return { mathClass: state.mathClass };
};

export default connect(mapStateToProps, { selectMathClass })(MathClassList);
