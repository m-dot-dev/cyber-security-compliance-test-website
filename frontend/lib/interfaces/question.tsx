export interface iQuestion {
  _id?: string;
  heading: string;
  question: string;
  answers: { answer: string }[];
}
