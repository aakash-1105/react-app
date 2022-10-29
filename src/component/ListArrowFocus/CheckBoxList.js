import React, {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useRef,
} from "react";

const checkBoxData = [
  { id: "vehicle1", value: "I have a bike" },
  { id: "vehicle2", value: "I have a bike" },
  { id: "vehicle3", value: "I have a bike" },
  { id: "vehicle4", value: "I have a bike" },
  { id: "vehicle5", value: "I have a bike" },
];

const CheckBoxList = forwardRef(({ handleListFocus }, ref) => {
  const myCheckBoxRefs = useRef([]);
  const handleKeyDown = (targetElem) => {
    if (targetElem) {
      targetElem.focus();
    }
  };

  useImperativeHandle(ref, () => ({
    checkBoxFocus() {
      myCheckBoxRefs.current[0].focus();
    },
  }));
  return (
    <div>
      {checkBoxData.map((item, i) => (
        <Fragment key={item.id}>
          <input
            tabIndex={-1}
            type="checkbox"
            id={item.id}
            ref={(el) => (myCheckBoxRefs.current[i] = el)}
            onKeyDown={(e) => {
              if (e.keyCode === 40) {
                handleKeyDown(
                  myCheckBoxRefs.current[
                    i === checkBoxData.length - 1 ? 0 : i + 1
                  ]
                );
              } else if (e.keyCode === 38) {
                if (i === 0) {
                  handleListFocus();
                } else {
                  handleKeyDown(
                    myCheckBoxRefs.current[
                      i === checkBoxData.length - 1 ? 0 : i - 1
                    ]
                  );
                }
              } else if (e.keyCode === 37) {
                handleListFocus();
              }
            }}
          />
          <label htmlFor={item.id}>{item.value}</label>
          <br />
        </Fragment>
      ))}
    </div>
  );
});

export default CheckBoxList;
