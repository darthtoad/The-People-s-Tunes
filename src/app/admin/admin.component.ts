import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})
export class AdminComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  submitForm(name: string, artist: string, description: string) {
    const newAlbum: Album = new Album(name, artist, description);
    this.albumService.addAlbum(newAlbum);
  }

}
