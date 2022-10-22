import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';


@Component({
    selector: 'app-chats',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

    constructor() { }

    openChatContainer: boolean = false;

    ngOnInit(): void {

    }

    toggleChatContainer() {
        this.openChatContainer = true;
    }





}
