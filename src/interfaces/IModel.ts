export interface IModel<T>{
  create(objToCreate: T): Promise<T>
  read(): Promise<T[]>
  readOne(id: string): Promise<T | null>
  update(id: string, objToupdate: T): Promise<T | null>
  delete(id: string): Promise<T | null>
}