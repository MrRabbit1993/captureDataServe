import { DataSource, DataSourceOptions } from "typeorm";
import { orm } from "../config/index"
const AppDataSource = new DataSource(orm as DataSourceOptions)
export { AppDataSource }