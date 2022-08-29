interface IService<T> {
  create(obj:T):Promise<T>,
  read(): Promise<T[]>,
  readOne(id: string): Promise<T | null>,
  update(id: string, payload: T): Promise<T | null>,
  delete(id: string): Promise<T | null>
}

export default IService;