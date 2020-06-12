import * as elixir from '../../../..'
import { responsePre } from '../../listeners/ResponsePre'

// @ts-ignore
elixir['PerformanceFacade'] = {
  clear: jest.fn(),
  start: jest.fn()
} as any

beforeEach(jest.clearAllMocks)

describe('Performance: Listeners: ResponsePost', () => {
  it ('clears performance', async () => {
    await responsePre()

    expect(elixir.PerformanceFacade.clear).toBeCalledTimes(1)
    expect(elixir.PerformanceFacade.clear).toBeCalledWith()
  })

  it ('starts the app response timer', async () => {
    await responsePre()

    expect(elixir.PerformanceFacade.start).toBeCalledTimes(1)
    expect(elixir.PerformanceFacade.start).toBeCalledWith('App:Response')
  })
})