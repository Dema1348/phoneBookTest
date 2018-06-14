import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegionesProvider } from '../../providers/regiones/regiones';
import { Region } from '../../models/region.model';
import { Observable } from 'rxjs/Observable';
import { Persona } from '../../models/persona.model';
import { PersonasProvider } from '../../providers/personas/personas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comuna } from '../../models/comuna.model';



@IonicPage()
@Component({
  selector: 'page-find',
  templateUrl: 'find.html',
})
export class FindPage {
  findForm: FormGroup;
  regiones: Region[];
  comunas: Comuna[];
  personas$: Observable<Persona>;
  search:Boolean;
  filtro:Boolean;
  comuna:Comuna;
  region:Region[];


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
    this.getRegiones();
  }

 
  getRegiones(){
    this.regionesProvider.getRegiones().then((regiones:Region[])=>{
      console.log("Regiones",regiones);
      this.regiones=regiones;
    });
   
  }

  find(comunaId?:number){
    this.search=true;
    let filter =(this.findForm.value);
    this.personas$ = this.personasProvider.getPersonas(filter,comunaId);
  }

  changeRegion(region:Region){
    this.comunas= region.comunas;
  }

  changeComuna(comuna:Comuna){
    if(!comuna)
      return;  
    if(this.filtro)
     this.find(comuna.id);

  }

  updateFilter(){
      if(!this.comuna)
        return;  
      if(this.filtro)
        this.find(this.comuna.id);
      else
      this.find();
  }

  

}
