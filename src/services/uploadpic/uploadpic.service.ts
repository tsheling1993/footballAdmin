
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
import { UploadMo } from '../../models/upload/uploadm.model';
import { UploadL } from '../../models/upload/uploadl.model';

@Injectable({
  providedIn: 'root'
})
export class UploadpicService {
  storageRef:AngularFireStorageReference;
  url1:string;
  url2:string;
  url3:string;
  urllogo1 : string;
  urllogo2 : string;


  constructor(private fstorage:AngularFireStorage,
  private fs:AngularFirestore) { }
  downloadUrl:Observable<any>;
  uploadFs:UploadMo={
    name:'',
    url:undefined,
    createdAt:''
  };
  uploadFs1:UploadM={
    name1:'',
    name2:'',
    name3:'',
    url1:undefined,
    url2:undefined,
    url3:undefined,
    createdAt:''
  };
  uploadFs2:UploadL={
    name1:'',
    name2:'',
    urllogo1 : undefined,
    urllogo2 : undefined,
    createdAt:''
  };
  uploads: AngularFirestoreDocument<Upload[]>;

  pushUpload1(upload: Upload,basePath:any,title:any) {
    // this.storageRef = this.fstorage.ref(`${this.basePath}/${upload.file.name}`);
    let uploadTask: UploadTask = firebase.storage().ref(`${basePath}/${upload.file.name}`).put(upload.file);
    //name of images
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
      this.url1=url;
      upload.url=url;
      this.uploadFs.name=name;
      this.uploadFs.createdAt=new Date().toString();
      this.saveFileData(url,basePath,title);
    });
  })
  
}
saveFileData(url:any,basePath:any,title:any) {
  this.uploadFs.url=url;
  console.log('save data url='+url)
  console.log(this.uploadFs.name,this.uploadFs.url,this.uploadFs.createdAt);
  this.fs.collection(`${basePath}`).doc(`${title}`).update(this.uploadFs);
}

//for multiple images upload

  pushUpload(upload1: Upload,upload2:Upload,upload3:Upload,basePath:any,title:any) {
    // this.storageRef = this.fstorage.ref(`${this.basePath}/${upload.file.name}`);
    let uploadTask1: UploadTask = firebase.storage().ref(`${basePath}/${upload1.file.name}`).put(upload1.file);
    let uploadTask2: UploadTask = firebase.storage().ref(`${basePath}/${upload2.file.name}`).put(upload2.file);
    let uploadTask3: UploadTask = firebase.storage().ref(`${basePath}/${upload3.file.name}`).put(upload3.file);
    
    //name of images
    let name1:string=upload1.file.name;
    let name2:string=upload2.file.name;
    let name3:string=upload3.file.name;

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

    uploadTask1.then((snapshot)=>
  {
      upload1.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    upload1.name=upload1.file.name;
    
    firebase.storage().ref(`${basePath}/${upload1.file.name}`).getDownloadURL().then((url)=>{
      this.url1=url;
      upload1.url=url;
      this.uploadFs1.name1=name1;
      this.uploadFs1.url1=url;
      this.uploadFs1.createdAt=new Date().toString();
      
    });
  })
  uploadTask2.then((snapshot)=>
  {
      upload2.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    upload2.name=upload2.file.name;
    
    firebase.storage().ref(`${basePath}/${upload2.file.name}`).getDownloadURL().then((url)=>{
      this.url2=url;
      upload2.url=url;
      this.uploadFs1.name2=name2;
      this.uploadFs1.url2=url;

      this.uploadFs1.createdAt=new Date().toString();
    });
  })
  uploadTask3.then((snapshot)=>
  {
      upload3.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    upload3.name=upload3.file.name;
    firebase.storage().ref(`${basePath}/${upload3.file.name}`).getDownloadURL().then((url)=>{
      this.url3=url;
      upload3.url=url;
      this.uploadFs1.name3=name3;
      this.uploadFs1.url3=url;
      this.uploadFs1.createdAt=new Date().toString();
      console.log("url1="+this.uploadFs1.url1+" // url2="+this.uploadFs1.url2+" // url3="+this.uploadFs1.url3);
      this.saveFileData3(url,basePath,title);
    });
  })
}

saveFileData3(url:any,basePath:any,title:any) {
  console.log('save data url='+url)
  console.log(this.uploadFs1.name3,this.uploadFs1.url3,this.uploadFs.createdAt);
  this.fs.collection(`${basePath}`).doc(`${title}`).update(this.uploadFs1);
}

//service used for uploading the logo

pushUploadLogo(upload1: Upload,upload2:Upload,basePath:any,title:any) {
  // this.storageRef = this.fstorage.ref(`${this.basePath}/${upload.file.name}`);
  let uploadTask1: UploadTask = firebase.storage().ref(`${basePath}/${upload1.file.name}`).put(upload1.file);
  let uploadTask2: UploadTask = firebase.storage().ref(`${basePath}/${upload2.file.name}`).put(upload2.file);
  //let uploadTask3: UploadTask = firebase.storage().ref(`${basePath}/${upload3.file.name}`).put(upload3.file);
  
  //name of images
  let name1:string=upload1.file.name;
  let name2:string=upload2.file.name;
  //let name3:string=upload3.file.name;

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

  uploadTask1.then((snapshot)=>
{
    upload1.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  upload1.name=upload1.file.name;
  
  firebase.storage().ref(`${basePath}/${upload1.file.name}`).getDownloadURL().then((url)=>{
    this.urllogo1=url;
    upload1.url=url;
    this.uploadFs2.name1=name1;
    this.uploadFs2.urllogo1=url;
    this.uploadFs2.createdAt=new Date().toString();
    
  });
})
uploadTask2.then((snapshot)=>
{
    upload2.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  upload2.name=upload2.file.name;
  
  firebase.storage().ref(`${basePath}/${upload2.file.name}`).getDownloadURL().then((url)=>{
    this.urllogo2=url;
    upload2.url=url;
    this.uploadFs2.name2=name2;
    this.uploadFs2.urllogo2=url;

    this.uploadFs2.createdAt=new Date().toString();
    console.log("url1="+this.uploadFs2.urllogo2+" // url2="+this.uploadFs2.urllogo2);
    this.saveFileData2(url,basePath,title);
  });
})
}

saveFileData2(url:any,basePath:any,title:any) {
console.log('save data url='+url)
console.log(this.uploadFs2.name2,this.uploadFs2.urllogo2,this.uploadFs.createdAt);
this.fs.collection(`${basePath}`).doc(`${title}`).update(this.uploadFs2);
}
}
