import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {

  @Input() displayNote:Post = {} as Post;
  @Output() deleteEvent = new EventEmitter<Post>();

  emitDelete():void{
    this.deleteEvent.emit(this.displayNote);
  }

}
