import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() text: string = '';
  @Input() error?: boolean = false;

  @HostBinding('class') classes: string = 'a-note';
  ngOnInit() {}
}
