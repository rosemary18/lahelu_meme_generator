// IMPORT DEFINED GLOBAL TYPES

import { IObjectItem } from "../../types";

// Define and export the IDataGenerator interface for generator components
export interface IDataGenerator {
  id: number;
  data: IObjectItem;
  active?: boolean;
  onActive: (id: string) => void;
  onUpdate?: (data: IObjectItem) => void;
  onDuplicate?: (data: IObjectItem) => void;
  onDelete?: (id: number) => void;
}