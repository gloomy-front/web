export interface INotification {
  pk: number;
  title: string;
  content: string;
  count: number;
  createdAt: string;
  type: 'LIKE' | 'COMMENT' | 'NESTED_COMMENT';
}
