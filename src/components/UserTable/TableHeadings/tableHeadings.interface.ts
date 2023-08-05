import { ChangeEventHandler } from "react";

export interface ITableHeadings {
  onChange: ChangeEventHandler<HTMLInputElement>;
  checkedValue: boolean;
}
