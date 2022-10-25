export interface subjectSllyabus {
    subject: string,
    link: string,
}

export interface classSllyabusArray {
    syllabusTitle: string,
    subjectSllyabusArray: subjectSllyabus[]
}