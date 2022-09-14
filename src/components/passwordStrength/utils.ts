export const strengthSelector: (strength: number) => string = (strength) => {
  switch (strength) {
    case 0:
      return "";
    case 1:
      return "weak";
    case 2:
      return "moderate";
    case 3:
      return "strong";
    case 4:
      return "very-strong";
    default:
      return "";
  }
};
