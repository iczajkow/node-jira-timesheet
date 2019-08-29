import * as moment from "moment";

export const toJiraDateFormat = (date: Date): string => {
  return moment(date).format("YYYY-MM-DD");
};

export const toDate = (jiraDateFormat: string): Date => {
  return moment(jiraDateFormat, "DD/MM/YYYY").toDate();
};
