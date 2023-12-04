export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!(students instanceof Array) || !(newGrades instanceof Array)) {
    return [];
  }
  return students.filter((st) => st.location === city)
    .map((st) => ({
      id: st.id,
      firstName: st.firstName,
      location: st.location,
      grade: (
        newGrades.filter((grade) => grade.studentId === st.id).pop() || { grade: 'N/A' }
      ).grade,
    }));
}
