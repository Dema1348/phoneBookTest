import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegionesProvider } from '../../providers/regiones/regiones';
import { Region } from '../../models/region.model';
import { Observable } from 'rxjs/Observable';
import { Persona } from '../../models/persona.model';
import { PersonasProvider } from '../../providers/personas/personas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the FindPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {
  findForm: FormGroup;
  regiones$: Observable<Region>
  personas$: Observable<Persona>

  constructor(public navCtrl: NavController, public navParams: NavParams, private regionesProvider:RegionesProvider, private formBuilder:FormBuilder , private personasProvider:PersonasProvider) {
    this.findForm = formBuilder.group({
      'nombre': [
        '',
        Validators.compose([])
      ],

      'apellido': [
        '',
        Validators.compose([])
      ]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPage');
    this.getRegiones();
    this.getPersonas();
  }

 
  getRegiones(){
    this.regiones$ = this.regionesProvider.getRegiones();
    this.regiones$.subscribe((regiones)=>{
      console.log("Result Regiones", regiones);
    },(error)=>{
      console.error(error);
    })
  }

  getPersonas(){
    this.personas$ = this.personasProvider.getPersonas();
    this.personas$.subscribe((personas)=>{
      console.log("Result Personas", personas);
    },(error)=>{
      console.error(error);
    })
  }

}
