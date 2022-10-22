import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { classSllyabusArray, subjectSllyabus } from '../../interface/syllabus.interface';
import { SyllabusService } from '../../services/syllabus.service';


@Component({
    selector: 'app-syllabus',
    templateUrl: './syllabus.component.html',
    styleUrls: ['./syllabus.component.scss']
})
export class SyllabusComponent implements OnInit {

    classSyllabusArray: classSllyabusArray[] = [];


    constructor(private syllabusService: SyllabusService) { }

    ngOnInit(): void {
        this.fetchSyllabus();
    }


    fetchSyllabus() {
        this.syllabusService.getclassSyllabus().subscribe({
            next: (res) => {

                if (res.status.toUpperCase() === "SUCCESS") {
                    // this.toastr.success('SUCCESS', 'LOGIN SUCCESSFULL');


                    for (let i = 0; i < res.data.length; i += 1) {
                       
                        for (let key in res.data[i]) {
                        
                            let syllabusTitle = key;// syllabus type example UT1,UT2,MIDTERM
                        
                            let subjectSllyabusArray:subjectSllyabus[] =[];

                            for (let j = 0; j < res.data[i][key].length; j += 1) {                   
              
                                let subject='';
                                let link='';

                                for (let subjectKey in res.data[i][key][j]) {

                                     subject = subjectKey;// subject name
                                     link = res.data[i][key][j][subjectKey]//subject syllabus link
                                }

                                subjectSllyabusArray.push({subject,link});
                            }

                            this.classSyllabusArray.push({ syllabusTitle,subjectSllyabusArray });
                        }  
                    }


                }
                else {
                    // this.toastr.error("FAILURE", 'INVALID REQUEST');
                }
            },
            error: (error) => {
                console.error("Error =>", error);
                // this.toastr.error('ERROR', 'SERVER OFFLINE');
            }
        });
    }



}
