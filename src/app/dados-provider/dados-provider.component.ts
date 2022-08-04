import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";


@Injectable()
export class DadosProviderComponent  {
  public BASE = "http://127.0.0.1:5000/"
  constructor(public http: HttpClient,) { }

  postAlbum(data){
    return new Promise((resolve, reject) => {
    this.http.post(this.BASE + "postAlbum/",data)
      .subscribe((result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
  });
  }
  putAlbum(data,id){
    return new Promise((resolve, reject) => {
    this.http.patch(this.BASE + "album/"+id,data)
      .subscribe((result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
  });
  }
  postSinger(data){
    console.log(data)
    return new Promise((resolve, reject) => {
    this.http.post(this.BASE + "postSinger/",data)
      .subscribe((result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
  });
  }
  getAllSingers(){
    return new Promise((resolve, reject) => {
      this.http.get(this.BASE + "getAllSingers/")
        .subscribe((result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          });
    });
  }

  putSong(data,id){
    console.log(data)
    return new Promise((resolve, reject) => {
    this.http.patch(this.BASE + "song/"+id,data)
      .subscribe((result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
  });
  }
  putSinger(data,id){
    console.log(data)
    return new Promise((resolve, reject) => {
    this.http.patch(this.BASE + "singer/"+id,data)
      .subscribe((result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
  });
  }
  postSong(data){
    console.log(data)
    return new Promise((resolve, reject) => {
    this.http.post(this.BASE + "postSong/",data)
      .subscribe((result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
  });
  }
  deleteSong(id){
    return new Promise((resolve, reject) => {
      this.http.delete(this.BASE + "song/"+id)
        .subscribe((result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          });
    });
  }
  deleteSinger(id){
    return new Promise((resolve, reject) => {
      this.http.delete(this.BASE + "singer/"+id)
        .subscribe((result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          });
    });
  }
  deleteAlbum(id){
    return new Promise((resolve, reject) => {
      this.http.delete(this.BASE + "album/"+id)
        .subscribe((result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          });
    });
  }
  getAllAlbuns(){
    return new Promise((resolve, reject) => {
    this.http.get(this.BASE + "getAllAlbum/")
      .subscribe((result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
  });
  }
  getAlbumBySinger(singer_id){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("singer_id",singer_id);
    return new Promise((resolve, reject) => {
    this.http.get(this.BASE + "getAlbumBySinger/",{params:queryParams})
      .subscribe((result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        });
  });
  }
  getSongById(id){
    console.log('a',id)
    return new Promise((resolve, reject) => {
      this.http.get(this.BASE + "song/"+id)
        .subscribe((result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          });
    });
  }
  getSingerById(id){
    console.log('a',id)
    return new Promise((resolve, reject) => {
      this.http.get(this.BASE + "singer/"+id)
        .subscribe((result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          });
    });
  }
  getAlbumById(id){
    console.log('a',id)
    return new Promise((resolve, reject) => {
      this.http.get(this.BASE + "album/"+id)
        .subscribe((result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          });
    });
  }
}
