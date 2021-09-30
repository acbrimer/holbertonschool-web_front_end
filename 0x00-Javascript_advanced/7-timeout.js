// 7-timeout

console.log('Start of the execution queue');

window.setTimeout(() => {
  console.log('Final code block to be executed');
}, 0);

[...Array(100).keys()].forEach((i) => console.log(i + 1));

console.log('End of the loop printing');
