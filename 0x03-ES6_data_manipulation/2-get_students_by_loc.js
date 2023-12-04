export default function getStudentsByLocation(students, city) {
  if (!(students instanceof Array)) {
    return [];
  }
  return students.filter((st) => st.location === city);
}
