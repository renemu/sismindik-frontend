export const calculateGrowth = (target, actual) => {
  if (target != 0 && actual != 0 && target != null) {
    let res = ((actual - target) / target) * 100
    // return res
    return responseCalculate(res)
  } else {
    return responseCalculate(-100)
  }
}
export const responseCalculate = (data) => {
  if (data != -100 && data) {
    return {
      status: true,
      success: data > 0 ? 'success' : 'danger',
      result: data < 0 ? (data * -1).toFixed(2) : data.toFixed(2),
      arrow: data > 0 ? 'up' : 'down'
    }
  } else {
    return {
      status: false,
      success: 'danger',
      result: 0,
      arrow: 'down'
    }
  }
}

const separator = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export const fixedNumberFormatter = (num, fixed) => {
  if (fixed != null) {
    return separator(Number(num).toFixed(fixed).replace('.', ','))
  } else {
    return separator(Number(num).toFixed(2).replace('.', ','))
  }
}

export function formatMoneyShort(num) {
  if (num > 1000000 && num < 900000000) {
    num = Math.round(num / 1000000)
    return 'Rp.' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'JT'
  } else if (num >= 1000000000) {
    num = Math.round(num / 1000000000)
    return 'Rp.' + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'M'
  }
}
