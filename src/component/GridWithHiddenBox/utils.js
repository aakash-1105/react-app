export const handleForxsScreen = (tempMenuArr, updateIndex) => {
  const updatedMenuArr = tempMenuArr.map((menu, index) => {
    if (menu.menuId) return menu;
    else if (updateIndex === index - 1)
      return {
        ...menu,
        hidden: !menu.hidden,
      };
    else return menu;
  });
  return updatedMenuArr;
};

export const handleForsmScreen = (tempMenuArr, updateIndex) => {
  const incrementedIndex = updateIndex + 2;

  let indexToUpdate;
  if (updateIndex === tempMenuArr.length - 2) indexToUpdate = updateIndex + 1;
  else if (incrementedIndex % 4 === 0) {
    indexToUpdate = updateIndex + 1;
  } else if (incrementedIndex % 2 === 0) {
    indexToUpdate = updateIndex + 3;
  }
  const updatedMenuArr = tempMenuArr.map((menu, index) => {
    if (menu.menuId) return menu;
    else if (index === indexToUpdate)
      return {
        ...menu,
        text: `Hidden Menu ${updateIndex + 1}`,
        hidden: !menu.hidden,
      };
    else return menu;
  });
  return updatedMenuArr;
};

const switchCaseForMd = (updateIndex) => {
  switch (updateIndex) {
    case 0:
    case 2:
    case 4:
      return 5;
    case 6:
    case 8:
    case 10:
      return 11;
    case 12:
    case 14:
    case 16:
      return 17;
    case 18:
    case 20:
    case 22:
      return 23;
    case 24:
    case 26:
      return 27;
    default:
      return "";
  }
};

const switchCaseForLg = (updateIndex) => {
  switch (updateIndex) {
    case 0:
    case 2:
    case 4:
    case 6:
      return 7;
    case 8:
    case 10:
    case 12:
    case 14:
      return 15;
    case 16:
    case 18:
    case 20:
    case 22:
      return 23;
    case 24:
    case 26:
      return 27;
    default:
      return "";
  }
};

export const handleFormdScreen = (tempMenuArr, updateIndex) => {
  let indexToUpdate = switchCaseForMd(updateIndex);

  const updatedMenuArr = tempMenuArr.map((menu, index) => {
    if (menu.menuId) return menu;
    else if (index === indexToUpdate)
      return {
        ...menu,
        text: `Hidden Menu ${updateIndex + 1}`,
        hidden: !menu.hidden,
      };
    else return menu;
  });
  return updatedMenuArr;
};

export const handleForlgScreen = (tempMenuArr, updateIndex) => {
  let indexToUpdate = switchCaseForLg(updateIndex);
  const updatedMenuArr = tempMenuArr.map((menu, index) => {
    if (menu.menuId) return menu;
    else if (index === indexToUpdate)
      return {
        ...menu,
        text: `Hidden Menu ${updateIndex + 1}`,
        hidden: !menu.hidden,
      };
    else return menu;
  });
  return updatedMenuArr;
};
