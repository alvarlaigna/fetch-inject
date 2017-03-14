import assert from 'assert'
import fetchInject from '../src/fetch-inject'

describe('API', () => {
  describe('#fetchInject()', () => {
    it('should fetch without error', (done) => {
      const args = ['./mocks/external.js']
      fetchInject(args).then(() => done())
    })
  })
})
