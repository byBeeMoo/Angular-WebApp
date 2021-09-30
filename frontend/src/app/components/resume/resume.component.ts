import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {

  pdfSource = '../assets/luca-webcv.pdf'

  constructor() {}

  ngOnInit(): void {
  }
}