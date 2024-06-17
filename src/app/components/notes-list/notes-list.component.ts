import { Component } from '@angular/core';
import { NoteComponent } from '../note/note.component';
import { NoteFormComponent } from '../note-form/note-form.component';
import { Post } from '../../models/post';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [NoteComponent, NoteFormComponent,],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {

  allNotes:Post[] = [
    {
         title: "Thought of the day",
    thought: "A bit of good music can make you focus" ,
    likes: 0
    },
    {
      title: "Song Quote of the Day",
 thought: "'Cause you can't jump the track we're like cars on a cable and life's like an hourglass glued to the table",
 likes:0 
 }


  ];

  deletePost(i:Post){
    let index:number=this.allNotes.findIndex(x=> x == i)
    this.allNotes.splice(index, 1)
  }

  addNote(i:Post){
    this.allNotes.push(i);
  }
}
