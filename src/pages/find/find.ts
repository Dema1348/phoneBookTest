import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, public regionesProvider:RegionesProvider, public formBuilder:FormBuilder , public personasProvider:PersonasProvider,public modalCtrl: ModalController, public alertCtrl:AlertController) {
    /**
    * Create reactive form.
    */
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
  }

  /**
   * Get all  regions from provider  regionesProvider.
   */
  getRegiones(){
    this.regionesProvider.getRegiones().then((regiones:Region[])=>{
      console.log("Regiones",regiones);
      this.regiones=regiones;
    }).catch((error)=>{
      this.showAlert("Regions","Ha ocurrido un error al cargar la información intente mas tarde.");
    });
   
  }

  /**
   * Get all persons from provider personasProvider by filter nombre/apellido and comunaId
   *   
   */
  find(comunaId?:number){
    this.search=true;
    let filter =(this.findForm.value);
    this.personas$ = this.personasProvider.getPersonas(filter,comunaId);
  }

   /**
   * Detect when region select change and update object comunas
   *   
   */
  changeRegion(region:Region){
    this.comunas= region.comunas;
  }

  /**
   * Detect when comuna select change and find person if comunaId is defined
   *   
   */
  changeComuna(comuna:Comuna){
    if(!comuna)
      return;  
    if(this.filtro)
     this.find(comuna.id);

  }

  /**
   * Detect when region/comuna filter is change and find persons by the state of filter
   *   
   */
  updateFilter(){
      if(!this.comuna)
        return;  
      if(this.filtro)
        this.find(this.comuna.id);
      else
      this.find();
  }

   /**
   * Open modal with select person
   *   
   */
  detail(persona:Persona){
    console.log("Select persona",persona);
    let detailModal = this.modalCtrl.create('DetailPage', {persona});
    detailModal.present();
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
