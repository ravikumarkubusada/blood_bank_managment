import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  form: FormGroup;
  mode: string;
  id: number;
  validation_messages = 'Field is required.';
  submitted: boolean;
  bloodGrpsObj: Object;

  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getBloodGrps();
    this.form = this.formBuilder.group({
      lastName: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      age: [null, [Validators.required, Validators.maxLength(2)]],
      bloodGroup: [null, [Validators.required]],
    });

    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      this.mode = params['mode'];
      switch (this.mode) {
        case 'edit':
        case 'view':
          this.getOne();
          break;
        default:
          break;
      }
    });

  }
  getBloodGrps() {
    this.http.get('http://localhost:8080/api/utils/bloodgrps').subscribe(res => {
      this.bloodGrpsObj = res;
    });
  }

  getOne() {
    this.http.get(`http://localhost:8080/api/bloodbank/${this.id}/`).subscribe(res => {
      this.form.patchValue({
        firstName: res.firstName,
        lastName: res.lastName,
        age: res.age,
        bloodGroup: res.bloodGroup
      });
    });
  }
  compareWith(o1: any, o2: any) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      // this.form.value.bloodGroup = this.form.value.bloodGroup;
      if (this.mode === 'edit') {
        this.form.value['donarId'] = this.id;
        this.http.put('http://localhost:8080/api/bloodbank/', this.form.value).subscribe(res => {
          this.successAlert(`Donar Udated Successfully!`)
        });
      } else {
        this.form.value['donarId'] = null;
        this.http.post('http://localhost:8080/api/bloodbank/', this.form.value).subscribe(res => {
          this.successAlert(`Donar Added Successfully!`);
        });
      }
    }
  }

  onDelete() {
    this.http.delete('http://localhost:8080/api/bloodbank/', this.form.value).subscribe(res => {
      this.successAlert(`Donar Deleted Successfully!`);
    });
  }

  async successAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success Alert',
      // subHeader: 'Subtitle',
      message: msg,
      buttons: [{
        text: 'Okay',
        handler: () => {
          this.route.navigateByUrl('');
        }
      }]
    });

    await alert.present();
  }

}
