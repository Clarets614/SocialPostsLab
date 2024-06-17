import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Post } from '../../models/post';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css'
})
export class NoteFormComponent {
  formPost: Post = {} as Post;
  @Output() CreatedEvent = new EventEmitter<Post>();
  
  display: boolean = false;

  submitForm():void{
    let newPost:Post = { ...this.formPost};
    this.CreatedEvent.emit(newPost)
    this.formPost = {} as Post;
  }

  toggleDisplay(){
    this.display = !this.display;
  }
}
