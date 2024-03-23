"use strict";
var EnumWeekDay;
(function (EnumWeekDay) {
    EnumWeekDay[EnumWeekDay["MONDAY"] = 0] = "MONDAY";
    EnumWeekDay[EnumWeekDay["TUESDAY"] = 1] = "TUESDAY";
    EnumWeekDay[EnumWeekDay["WEDNESDAY"] = 2] = "WEDNESDAY";
    EnumWeekDay[EnumWeekDay["THURSDAY"] = 3] = "THURSDAY";
    EnumWeekDay[EnumWeekDay["FRIDAY"] = 4] = "FRIDAY";
})(EnumWeekDay || (EnumWeekDay = {}));
const WEEK_DAY = {
    MONDAY: "Monday",
    TUESDAY: "Tuesday",
    WEDNESDAY: "Wednesday",
    THURSDAY: "Thursday",
    FRIDAY: "Friday"
};
function printWeekDay(day) {
    console.log(day);
}
printWeekDay(WEEK_DAY.MONDAY);
printWeekDay("Monday");
//# sourceMappingURL=T10_Enum.js.map