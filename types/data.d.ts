export type User = {
  name: string;
  surname: string;
  email: string;
  id: string;
  kids: Array<Kid>;
};

export type Kid = {
  id: string;
  name: string;
  age: number;
  sessions: Array<Session>;
};

export type Session = {
  id: string;
  name: string;
  description: string;
  duration: number;
  height: number;
  start_time: string;
  end_time: string;
  location: string;
  skills: Skills;
  most_used: Array<Sentence>;
  video: Video;
};

export type Video = {
  url: string;
  thumbnail: string;
  type: string;
  duration: number;
  highlights: Array<Highlight>;
};

export type Highlight = {
  url: string;
  id: string;
  timestamp: number;
  text: string;
};

export type Sentence = {
  text: string;
  score: number;
  id: string;
};

export type Skill = {
  text: string;
  score: number;
  status: number;
  comment: string;
};

export type Skills = {
  [key: string]: Skill;
};

export type dataAPIResponse = {
  user: User;
  kids: Array<Kid>;
};
