// 0-welcome.js
function welcome(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    const displayFullName = () => window.alert(`Welcome ${fullName}!`);
    displayFullName();
}
