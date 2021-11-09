import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mlmodel',
  templateUrl: './mlmodel.component.html',
  styleUrls: ['./mlmodel.component.scss']
})
export class MLModelComponent implements OnInit {

  testArray;
  user_image;
  imageShowId;
  num_object;
  uploadImage: FormGroup;
  submitted = false
  constructor(private fb: FormBuilder, private objectDetection: UserService,
    private sanitizer: DomSanitizer) {
  }

  test = [
    {
      "detections": [
        {
          "class": "laptop",
          "confidence": 0.9359139800071716
        },
        {
          "class": "laptop",
          "confidence": 0.9359139800071716
        },
        {
          "class": "person",
          "confidence": 0.36023348569869995
        }
      ],
      "status": 200,
      "total_object": 2
    }
  ]



  ngOnInit(): void {
    this.uploadImage = this.fb.group({
      image: ['']
    });
  }


  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadImage.get('image').setValue(file);
    }
    this.onDetection();
  }



  onDetection() {
    this.imageShowId = document.getElementById("imageShow");
    if (this.imageShowId.style.display = "block") {
      this.imageShowId.style.display = "none";
    }
    const formData = new FormData();
    formData.append('file', this.uploadImage.get('image').value);
    console.log("Ok requrst sent");

    this.objectDetection.objectClassification(formData).subscribe(data => {
      console.log("entered Image");
      let objectURL = URL.createObjectURL(data);
      this.user_image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      console.log(data);
    },
      error => console.log(error));
      this.testArray = {};
  }

  onSubmit() {
    this.imageShowId = document.getElementById("imageShow");
    this.imageShowId.style.display = "block";
    const formData = new FormData();
    formData.append('file', this.uploadImage.get('image').value);
    this.objectDetection.objectCounting(formData).subscribe(data => {
      // this.num_object = data.response;
      // console.log(data.response);
      for (var val of data.response) {
        console.log(val.detections);
        var arr = [];
        for (var val1 of val.detections) {
          //console.log(val1.class);
          arr.push(val1.class);
        }
        console.log(arr);
        const counts = {};
        arr.forEach((x) => {
          counts[x] = (counts[x] || 0) + 1;
        });
        this.testArray = counts;
        console.log(this.testArray);
        this.testArray["total Object"] = val.total_object;
      }
    },
      error => console.log(error));
  }

  clear() {
    this.user_image
    this.num_object.length = 0;
    this.user_image = '';
  }

}
