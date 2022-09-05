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

export interface MessageType {
  user_id: string;
  message: string;
  created_at: number;
}

export interface NotificationType {
  id: string;
  message: string;
  created_at: number;
  uid: string;
  data: any;
}
