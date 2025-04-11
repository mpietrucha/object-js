import { isObject } from 'lodash-es'
import { useConfirm, useNegate } from '@mpietrucha/function'

export const is = useConfirm(isObject)

export const not = useNegate(is)
