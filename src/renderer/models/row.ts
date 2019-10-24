export interface Row {
  date: Date;
  total: number;
  issues: { key: string; time: number }[];
}
