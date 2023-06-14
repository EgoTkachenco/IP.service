// const getIpsList = (level = '', allowed = []) => {
//   const isFirstLevel = !level
//   let result = []
//   const levelItems = new Array(255)
//     .fill(0)
//     .map((el, i) => i + 1)
//     .filter((el) =>
//       isFirstLevel && allowed.length > 0 ? allowed.includes(el) : el
//     )
//   return levelItems
//   if (isFirstLevel) return result
// }

export const getRangeList = (range = '', allowed = []) => {
  let level = 0
  if (!range) level = 1
  else {
    const tail = range.split('/')[1]
    if (!tail || isNaN(Number(tail))) level = 1
    else level = Math.ceil(tail / 8) + 1
  }

  const tail = level * 8
  const levelItems = new Array(255)
    .fill(0)
    .map((el, i) => i + 1)
    .filter((el) =>
      level === 1 && allowed.length > 0 ? allowed.includes(el) : el
    )

  const prefix = range.split('.').filter((el) => Number(el))
  const result = []
  for (let i = 0; i < levelItems.length; i++) {
    const element = levelItems[i]
    const base = prefix.concat(element)

    if (level === 4) {
      const address = base.join('.')
      if (element !== 255)
        result.push({
          address: address,
        })
    } else {
      const addressRange = `${base
        .concat(new Array(4 - level).fill(0))
        .join('.')}/${tail}`
      const firstAddress = base.concat(new Array(4 - level).fill(0)).join('.')
      const lastAddress = base
        .concat(
          new Array(4 - level)
            .fill(255)
            .map((el, i) => (i === 4 - level - 1 ? 254 : el))
        )
        .join('.')
      result.push({
        range: addressRange,
        firstAddress: firstAddress,
        lastAddress: lastAddress,
      })
    }
  }

  return result
}

module.export = {
  getRangeList,
}
