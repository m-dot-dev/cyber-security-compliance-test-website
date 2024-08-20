export interface iQuestion {
  heading: string;
  question: string;
  answers: string[] | { answer: string }[];
}
