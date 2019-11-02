import * as moment from "moment";

const JIRA_DATE_FORMAT = "YYYY-MM-DD";

export const toJiraDateFormat = (date: Date): string => {
  return moment(date).format(JIRA_DATE_FORMAT);
};

export const fromJiraDate = (date: string): Date => {
  return moment(date, JIRA_DATE_FORMAT).toDate();
};

export const toDate = (jiraDateFormat: string): Date => {
  return moment(jiraDateFormat, "DD/MM/YYYY").toDate();
};

export const isWeekend = (date: Date): boolean => {
  const day = date.getDay();
  return day === 6 || day === 0;
};
