export interface IPendingAssigment {
    pdfLink: string,
    submissionDate: string,
    title: string,
    totalMarks: number,
    classId:string
}

export interface ISubmittedAssigment {
    title: string,
    marksObtained:number,
    status:string,
    subject:string,
    teacherImageLink:string,
    teacherName:string

}

export interface IUpcomingAssigment {
    pdfLink: string,
    submissionDate: string,
    title: string,
    totalMarks: number,
    classId:string
}
