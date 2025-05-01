`Feature: Whole Number Divider
As a user
I want to be able to 
divide two numbers and get a whole number result.`

`Scenario: Dividing two numbers
Given I have entered <dividend> and <divider>
Then I should get <result> as a whole number.`

` Examples:
  | dividend | divider | result |
  | ---      | ---     | ---    |
  | 20       | 10      | 2      |
  | 20       | 3       | 6      |`

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});