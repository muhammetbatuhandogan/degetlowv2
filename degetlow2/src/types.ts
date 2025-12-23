
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export interface WorkoutStats {
  day: string;
  calories: number;
  duration: number;
}
