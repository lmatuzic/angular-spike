export interface Notification {
  id: number;
  img: string;
  title: string;
  subtitle: string;
}

export interface Profile {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  link: string;
  color: string;
}

export interface App {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  link: string;
}

export interface Quicklink {
  id: number;
  title: string;
  link: string;
}

export interface Language {
  language: string;
  code: string;
  type: string;
  icon: string;
}
