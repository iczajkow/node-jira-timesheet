import * as moment from "moment";

export const toJiraDateFormat = (date: Date) => {
  return moment(date).format("YYYY-MM-DD");
};

export const toDate = (jiraDateFormat: string) => {
  return moment(jiraDateFormat, "DD/MM/YYYY").toDate();
};
