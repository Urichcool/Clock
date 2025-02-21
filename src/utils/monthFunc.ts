export const monthFunc = (month: number): string => {
  let whichMonth: string = "";

  switch (month) {
    case 1:
      whichMonth = "January";
      break;

    case 2:
      whichMonth = "February";
      break;

    case 3:
      whichMonth = "March";
      break;

    case 4:
      whichMonth = "April";
      break;

    case 5:
      whichMonth = "May";
      break;

    case 6:
      whichMonth = "June";
      break;

    case 7:
      whichMonth = "July";
      break;
    case 8:
      whichMonth = "August";
      break;
    case 9:
      whichMonth = "September";
      break;
    case 10:
      whichMonth = "October";
      break;
    case 11:
      whichMonth = "November";
      break;
    case 12:
      whichMonth = "December";
      break;

    default:
      whichMonth = "";
  }

  return whichMonth;
};
