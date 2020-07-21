import { Pg } from './Pg'
import { DEFAULT_CONNECTION, DatabaseManager } from './types'

export class ElixirDatabaseManager implements DatabaseManager {
  protected connections: { [key: string]: Pg } = {}

  public add(name: string, instance: Pg): ElixirDatabaseManager {
    this.connections[name] = instance

    return this
  }

  public get(name?: string): Pg {
    if (name) {
      return this.connections[name]
    }

    return this.connections[DEFAULT_CONNECTION]
  }

  public all(): { [key: string]: Pg } {
    return this.connections
  }
}
