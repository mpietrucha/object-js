import { useConfirm, useNegate } from '@mpietrucha/function'
import { isObject } from 'lodash-es'

export const is = useConfirm(isObject)

export const not = useNegate(is)
