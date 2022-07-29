export interface IService<T> {
  read(): Promise<T[]>;
}