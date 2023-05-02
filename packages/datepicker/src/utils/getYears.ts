import dayjs from 'dayjs'

export const getYears = () => {
  const startYear = 1900
  const endYear = 2099

  const years = []
  for (let year = startYear; year <= endYear; year++) {
    const date = dayjs().year(year).startOf('year')
    years.push(date)
  }

  return years.map((date) => date.format('YYYY'))
}
