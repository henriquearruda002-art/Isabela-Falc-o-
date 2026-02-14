
export const isAdult = (day: number, month: number, year: number): boolean => {
  if (!day || !month || !year) return false;
  
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  
  // Basic sanity check for valid date
  if (birthDate.getFullYear() !== year || birthDate.getMonth() !== month - 1 || birthDate.getDate() !== day) {
    return false;
  }

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age >= 18;
};
