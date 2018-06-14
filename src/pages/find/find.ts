import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegionesProvider } from '../../providers/regiones/regiones';
import { Region } from '../../models/region.model';
import { Observable } from 'rxjs/Observable';
import { Persona } from '../../models/persona.model';
import { PersonasProvider } from '../../providers/personas/personas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {
  findForm: FormGroup;
  regiones$: Observable<Region>;
  personas$: Observable<Persona>;
  search:Boolean;

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
    console.log(this.findForm.controls.nombre.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPage');
  }

 
  getRegiones(){
    this.regiones$ = this.regionesProvider.getRegiones();
    this.regiones$.subscribe((regiones)=>{
      console.log("Result Regiones", regiones);
    },(error)=>{
      console.error(error);
    })
  }

  find(){
    this.search=true;
    let filter =(this.findForm.value)
    this.personas$ = this.personasProvider.getPersonas(filter);
  }

  

}
