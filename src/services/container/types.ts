export enum ContainerTypes {
  TRANSIENT = 'transient',
  SINGLETON = 'singleton',
}

export interface ContainerService {
  name: string
  type: ContainerTypes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object: any
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Class = { new (...args: any[]): any }

export interface Container {
  transient(name: string, object: Class, force?: boolean): Container
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  singleton(name: string, object: any, force?: boolean): Container
  setService(
    name: string,
    type: ContainerTypes,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    object: any,
    force?: boolean,
  ): Container
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolve(...serviceNames: string[]): any
  getService(name: string): ContainerService
}
