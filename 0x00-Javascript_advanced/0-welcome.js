// 0-welcome
function welcome(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  const displayFullName = () => window.alert(`Welcome ${fullName}!`);
  displayFullName();
}
