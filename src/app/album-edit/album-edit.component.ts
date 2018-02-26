import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
  styleUrls: ['./album-edit.component.css'],
  providers: [AlbumService]
})
export class AlbumEditComponent implements OnInit {
  @Input() selectedAlbum;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }


  beginUpdatingAlbum(albumToUpdate){
    this.albumService.updateAlbum(albumToUpdate);
  }

  beginDeletingAlbum(albumToDelete) {
    if (confirm(`Are you sure you want to delete the album ${albumToDelete.name}?`)) {
      this.albumService.deleteAlbum(albumToDelete);
    }
  }

}
