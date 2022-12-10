//다시품
const calculate_score = (survey, choices, scores) => {
  let new_survey = survey.split("");
  let [a_score, b_score] = [0, 0];
  switch (choices) {
    case 1:
      a_score += 3;
      break;
    case 2:
      a_score += 2;
      break;
    case 3:
      a_score += 1;
      break;
    case 5:
      b_score += 1;
      break;
    case 6:
      b_score += 2;
      break;
    case 7:
      b_score += 3;
      break;
  }
  if (a_score > b_score) {
    scores.set(new_survey[0], scores.get(new_survey[0]) + a_score);
  } else if (a_score < b_score) {
    scores.set(new_survey[1], scores.get(new_survey[1]) + b_score);
  }
};

const find_answer = (scores) => {
  let answer = "";
  const board = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];

  for (let i = 0; i < board.length; i++) {
    const a_score = scores.get(board[i][0]);
    const b_score = scores.get(board[i][1]);
    if (a_score >= b_score) {
      answer += board[i][0];
    } else {
      answer += board[i][1];
    }
  }

  return answer;
};
function solution(survey, choices) {
  var answer = "";
  let scores = new Map();
  scores.set("R", 0);
  scores.set("T", 0);
  scores.set("C", 0);
  scores.set("F", 0);
  scores.set("J", 0);
  scores.set("M", 0);
  scores.set("A", 0);
  scores.set("N", 0);

  for (let i = 0; i < survey.length; i++) {
    calculate_score(survey[i], choices[i], scores);
  }
  answer = find_answer(scores, answer);

  return answer;
}
solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);
solution(["TR", "RT", "TR"], [7, 1, 3]);
