import * as React from "react";

interface Props {
  worklogs?: any[];
}

const WorklogList: React.FunctionComponent<Props> = ({ worklogs }) => {
  return <div>{worklogs ? JSON.stringify(worklogs) : "Nothing to show"}</div>;
};

export default WorklogList;
