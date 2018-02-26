import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './array-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  albums: FirebaseListObservable<any[]>

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: string) {
    return this.database.object('albums/' + albumId);
  }

  updateAlbum(albumToUpdate){
    let albumEntryInFirebase = this.getAlbumById(albumToUpdate.$key);
    albumEntryInFirebase.update({name: albumToUpdate.name,
                                artist: albumToUpdate.artist,
                                description: albumToUpdate.description});
  }

  deleteAlbum(albumToDelete){
    let albumEntryInFirebase = this.getAlbumById(albumToDelete.$key);
    albumEntryInFirebase.remove();
  }

}
