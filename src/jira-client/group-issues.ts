import { IssueWorklog } from "./models/issue-worklog";
import moment = require("moment");
import { Worklog } from "./models/worklog";

export const groupIssues = (
  issueWorklogs: IssueWorklog[]
): { [key: string]: Worklog[] } => {
  return issueWorklogs.reduce((previous, current) => {
    const worklogs = getWorklogsByDate(current.worklogs);
    return merge(previous, worklogs);
  }, {});
};

const getWorklogsByDate = (
  worklogs: Worklog[]
): { [key: string]: Worklog[] } => {
  return worklogs.reduce((previous, current) => {
    const day = getDay(current.started);
    return merge(previous, { [day]: [current] });
  }, {});
};

const merge = (
  first: { [key: string]: Worklog[] },
  second: { [key: string]: Worklog[] }
): { [key: string]: Worklog[] } => {
  return Object.keys(second).reduce((previous, current) => {
    const existingValue = previous[current] || [];
    return { ...previous, [current]: [...existingValue, ...second[current]] };
  }, first);
};

const getDay = (date: string): string => {
  const day = date.match(/\d{4}-\d{2}-\d{2}/g);
  if (!day) {
    throw new Error(`Unexpected date format: ${date}`);
  }
  return day[0];
};
