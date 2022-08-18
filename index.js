// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun("play Fifa");

const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
console.log(mondayWork("play football"));

function wrapAdjective(param1 = "*") {
  return function (param2 = "special") {
    return `You are ${param1 + param2+param1}!`;
  };
}
const encouragingPromptFunction = wrapAdjective();
console.log(encouragingPromptFunction("a dedicated programmer"));
