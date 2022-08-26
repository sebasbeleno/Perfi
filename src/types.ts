export interface userType {
  uid: string;
  photoURL: string | null;
  name: string | null;
}

export interface PostType {
  id: string;
  content: string;
  user: userType;
  createdAt: number;
  likes: [];
}
