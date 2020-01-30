import { put, call } from 'redux-saga/effects'
import { setPaymentInProgress } from '../payments/actionCreator'
import { finishPaymentApplication } from './finishPaymentApplication'
import { checkPayment } from '../payments/checkPayment'
import { history } from '../../services/historyService'

export function* sampleProcessor(action) {
  const payload = action.payload
  yield call(history.push, '/somePage')
  yield put(setPaymentInProgress(true))
  yield call(checkPayment, paymentPayload)
  yield call(finishPaymentApplication)
}
