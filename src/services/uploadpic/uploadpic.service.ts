
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Upload } from '../../models/upload/upload';
import { UploadM } from '../../models/upload/upload.model';
import * as firebase from 'firebase';
import { UploadTask } from '@angular/fire/storage/interfaces';
import { finalize } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class UploadpicService {
  storageRef:AngularFireStorageReference;
  url:string;
  constructor(private fstorage:AngularFireStorage,
  private fs:AngularFirestore) { }
  downloadUrl:Observable<any>;
  uploadFs:UploadM={
    name:'',
    url:undefined,
    createdAt:''
  };
  uploads: AngularFirestoreDocument<Upload[]>;

  pushUpload(upload: Upload,basePath:any,title:any) {
    // this.storageRef = this.fstorage.ref(`${this.basePath}/${upload.file.name}`);
    let uploadTask: UploadTask = firebase.storage().ref(`${basePath}/${upload.file.name}`).put(upload.file);
    let name:string=upload.file.name;
    // uploadTask.snapshotChanges().pipe(finalize(()=>
    // {
    //   console.log("inside snapshot");

      
    //   // this.downloadUrl=this.storageRef.getDownloadURL();
    //   console.log("name here="+name);
    //   this.downloadUrl.subscribe(url=>{this.url=url});
    //   // this.uploadFs={
    //   //   name:name,
    //   //   url:this.url,
    //   //   createdAt:new Date().toString(),
    //   // }
    //  

    // })).subscribe();

    uploadTask.then((snapshot)=>
  {
      upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    upload.name=upload.file.name;
    
    firebase.storage().ref(`${basePath}/${upload.file.name}`).getDownloadURL().then((url)=>{
      this.url=url;
      upload.url=url;
      this.uploadFs.name=name;
      this.uploadFs.createdAt=new Date().toString();
      this.saveFileData(url,basePath,title);
      // this.uploadFs.createdAt=new Date().toString();
      // console.log("upload="+this.uploadFs.url,this.uploadFs.name);
    });

    
    //   this.uploadFs.name=name;
    //   this.uploadFs.url=this.url;
    //   this.uploadFs.createdAt=new Date().toString();
  })
  //   uploadTask.then((snapshot)=>
  // {
  //   upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //   upload.name=upload.file.name;
  //   console.log('name='+upload.name+" and url="+snapshot.downloadURL);
  //   upload.url=snapshot.downloadURL;
  //    this.uploadFs.name=name;
  //     this.uploadFs.url=this.url;
  //     this.uploadFs.createdAt=new Date().toString();
  //    //upload success
  //    upload
  //    this.saveFileData(this.uploadFs);

  // },(error)=>
  //   {
  // // upload failed
  // console.log(error)
  // }); 
}
saveFileData(url:any,basePath:any,title:any) {
  this.uploadFs.url=url;
  console.log('save data url='+url)
  console.log(this.uploadFs.name,this.uploadFs.url,this.uploadFs.createdAt);
  this.fs.collection(`${basePath}`).doc(`${title}`).update(this.uploadFs);
}
}
