enum EnumWeekDay {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY
}

const WEEK_DAY = {
    MONDAY: "Monday",
    TUESDAY: "Tuesday",
    WEDNESDAY: "Wednesday",
    THURSDAY: "Thursday",
    FRIDAY: "Friday"
} as const

type ObjectValues<T> = T[keyof T]

type WeekDay2 = ObjectValues<typeof WEEK_DAY>

function printWeekDay(day: WeekDay2) {
    console.log(day)
}

printWeekDay(WEEK_DAY.MONDAY)
printWeekDay("Monday")