// 3-classrooms

function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return () => seat;
  }
  // [...Array(n).keys()] creates an array from 0-n
  // for each element of created array:
  //    - return anon function from studentSeat(i + 1)
  //    - call returned function and return result to students array
  let students = [...Array(numberOfStudents).keys()].map((i) =>
    studentSeat(i + 1)()
  );
  return students;
}

const classRoom = createClassRoom(10);
