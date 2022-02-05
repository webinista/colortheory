import React from 'react';
import PropTypes from 'prop-types';

const Glossary = ({ terms }) => {
  const termsList = [];
  let tKey = 0;

  /*
    Using push so that React doesn't fuss at us about adjacent elements
    and wrappers. These will all be children of a <dl> and don't need a
    wrapper.
  */
  terms.forEach( ( term ) => {
    termsList.push( <dt key={++tKey} id={term.value}>{term.label}</dt> );
    termsList.push( <dd key={++tKey}>{term.definition}</dd> );
  });

  return (
    <div>
      <h2>Color scheme definitions</h2>
      <dl className="glossary">
        {termsList}
      </dl>
    </div>
  );
};

Glossary.propTypes = {
  terms: PropTypes.arrayOf( PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired
  }) ).isRequired,
};

export default Glossary;
