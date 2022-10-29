import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Assignment } from '../../../interface/announcement.interface';
import { AnnouncementService } from '../../../services/announcement.service';


@Component({
    selector: 'app-announcement',
    templateUrl: './announcement.component.html',
    styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

    announcementArray: Assignment[] = [];

    constructor(private announcementService: AnnouncementService, private router: Router, private toastr: ToastrService) { }

    ngOnInit(): void {
        this.fetchAnnouncemnt();
    }


    // FETCH ANNOUNCEMENT/ CIRCULAR FOR SCHOOL
    fetchAnnouncemnt() {

        this.announcementService.getSchoolCircular().subscribe({
            next: (res) => {

                if (res.status.toUpperCase() === "SUCCESS") {
                    // this.toastr.success('SUCCESS', 'SUCCESSFULLY FETCHED ANNOUNCEMENTS');

                    for (let i = 0; i < res.data.length; i += 1) {


                        const circular: Assignment = {
                            title: res.data[i].title,
                            link: res.data[i].pdfLink,
                            image: res.data[i].imageLink
                        }

                        this.announcementArray.push(circular);
                    }

                }
                else {
                    this.toastr.warning("FAILURE", 'INVALID REQUEST');
                }
            },
            error: (error) => {
                console.error("Error =>", error);
                this.toastr.error('ERROR', 'SERVER OFFLINE');
            }
        });

    }

    // NAVIGATION TO CIRCULAR THROUGH LINK
    navigateToCircular(link: Location) {
        window.location = link;
    }


}
