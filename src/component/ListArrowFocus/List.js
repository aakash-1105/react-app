import React, {
  forwardRef,
  Fragment,
  useImperativeHandle,
  useRef,
} from "react";
import CheckBoxList from "./CheckBoxList";
const listData = [
  { id: 1, value: "Item 1" },
  { id: 2, value: "Item 2" },
  { id: 3, value: "Item 3" },
  { id: 4, value: "Item 4" },
  { id: 5, value: "Item 5" },
];

const List = forwardRef(({ handleFocus }, ref) => {
  const myRefs = useRef([]);
  const childCheckBoxRef = useRef();

  console.log({ myRefs });

  useImperativeHandle(ref, () => ({
    childFunction() {
      myRefs.current[0].focus();
    },
  }));

  const handleKeyDown = (targetElem) => {
    if (targetElem) {
      targetElem.focus();
    }
  };

  const handleListFocus = () => {
    myRefs.current[0].focus();
  };
  const handleCheckBoxFocus = () => {
    childCheckBoxRef.current.checkBoxFocus();
  };
  return (
    <div>
      {listData.map((item, i) => (
        <Fragment key={item.id}>
          <button
            tabIndex={-1}
            ref={(el) => (myRefs.current[i] = el)}
            onKeyDown={(e) => {
              if (e.keyCode === 40) {
                handleKeyDown(
                  myRefs.current[i === listData.length - 1 ? 0 : i + 1]
                );
              } else if (e.keyCode === 38) {
                if (i === 0) {
                  handleFocus();
                } else {
                  handleKeyDown(
                    myRefs.current[i === listData.length - 1 ? 0 : i - 1]
                  );
                }
              } else if (e.keyCode === 39) {
                handleCheckBoxFocus();
              }
            }}
          >
            {item.value}
          </button>
          <br />
        </Fragment>
      ))}
      <CheckBoxList handleListFocus={handleListFocus} ref={childCheckBoxRef} />
    </div>
  );
});

export default List;
