import { IssueWorklog } from "../../jira-client/models/issue-worklog";

export interface WorklogData {
  day: Date;
  issueKey: string;
  timeSpentSeconds: number;
}
