import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Persona } from '../../models/persona.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RutValidator } from 'ng2-rut';
import { CallNumber } from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  detailForm:FormGroup;
  persona:Persona;
  patternPhone:RegExp= new RegExp("^([5]{1})([6]{1})[0-9]{9}$");

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public formBuilder:FormBuilder,rutValidator: RutValidator, public callNumber: CallNumber, public alertCtrl:AlertController) {
    /**
    * Get person navParams .
    */
    this.persona=this.navParams.get('persona');

    /**
    * Create reactive form.
    */
    this.detailForm = formBuilder.group({
      'rut': [
        this.persona.rut,
        [rutValidator]
      ]
      ,
      'telefono': [
        this.persona.telefono,
        [Validators.pattern(this.patternPhone)]
      ]
    });
  
  }

  ionViewDidLoad() {
    
   
  }


  /**
  * Close actual modal view.
  */
  close(){
    this.view.dismiss();
  }

  /**
  * Native call from device only if number phone is correct
  */
  call(){
    if(!this.patternPhone.test(this.persona.telefono))
      this.showAlert("Llamar","Número con formato inválido.")
    else{
      this.callNumber.callNumber(this.persona.telefono.toString(), true)
      .then(res => console.log('Call', res))
      .catch(err => {
        this.showAlert("Llamar","Error la iniciar la llamada.")
        console.log('Error call', err)
      });
    }

  }

  /**
   * Show alert message
   *   
   */
  showAlert(title,message) {
    let alert = this.alertCtrl.create({
      title: title ,
      message: message,
      buttons: ['OK']
    });

    alert.present();
  }

}
