import React from "react";

const WrongInitials = props => {
  if (props.value === "length") {
    return <div>The value should contail at least two characters</div>;
  } else {
    return (
      <div>
        <p>Please check if the data is inserted correctly </p>
        <p> Can't contain symbols or numbers</p>
      </div>
    );
  }
};
export { WrongInitials };
