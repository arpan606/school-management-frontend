
export interface PeriodDetails {
    subject: string,
    teacherImgLink: string,
    teacherName: string
}


export interface TimeTable {

    firstPeriod: string | PeriodDetails,
    secondPeriod: string | PeriodDetails,
    thirdPeriod: string | PeriodDetails,
    fourthPeriod: string | PeriodDetails,
    fifthPeriod: string | PeriodDetails,
    sixthPeriod: string | PeriodDetails,
    seventhPeriod: string | PeriodDetails,
    eigthPeriod: string | PeriodDetails,
    day?: string
}