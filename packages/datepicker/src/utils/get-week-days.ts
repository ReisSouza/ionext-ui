import dayjs from 'dayjs'
export type GetWeedDaysParams = {
  short?: boolean | undefined
}

export const getWeedDays = ({ short = false }: GetWeedDaysParams = {}) => {
  const daysOfWeek = []

  for (let i = 0; i < 7; i++) {
    const day = dayjs().day(i).format('ddd')
    daysOfWeek.push(day)
  }

  return daysOfWeek
}
