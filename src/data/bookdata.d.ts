// src/data/bookdata.d.ts

import { Book } from "../types";

declare module "*.json" {
  const value: Book[];
  export default value;
}
