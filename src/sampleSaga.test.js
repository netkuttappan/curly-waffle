import { someMethodtottest } from '../someMethodtottest'
import { put } from 'redux-saga/effects'


describe('sample', () => {
  it('should test sample', () => {
    const generator = someMethodtottest({})
    expect(generator.next().value).toEqual(
      put({ type: SOMETYPE, error: {} })
    )
  })
})
