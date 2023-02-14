import { Simple } from './Simple'
import {
  TransactionAction,
  TransactionCategory,
  TransactionMapping,
} from '../types'

import { parser } from './parser'

export const AMMVote: TransactionMapping = {
  Simple,
  action: TransactionAction.MODIFY,
  category: TransactionCategory.DEX,
  parser,
}
