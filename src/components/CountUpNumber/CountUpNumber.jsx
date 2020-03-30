import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CountUpNumber = ({ description, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <div>
              <h4 ref={countUpRef} style={{
                color: "#065BE7",
                fontSize:"50px",
                fontWeight: "bold",
                margin: 0
              
              }}/>
            <p style={{fontSize: 25}}> {description} </p>
            </div>
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

export default CountUpNumber;