import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import Swal from 'sweetalert2';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import {FormsModule} from "@angular/forms";
import {PersonaService} from "./servicios/persona.service";
import {HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet
    , CardModule
    , ButtonModule
    , TableModule,
    HttpClientModule,
    InputTextModule,
    FormsModule],
  providers:[PersonaService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private  servicePersona:PersonaService) {
   this.fun_listar_persona_service();

  }

  ngOnInit(): void {
    }

  jsonPersona : any = [{nombre:"joel",
                      apellido:"vera",
                       estado:"activo"
                        },{nombre:"juan",
                              apellido:"vera 2",
                              estado:"eliminado"
                            }]
  objectPersona:any = {};
  fun_click(e: any){

    let bandera:boolean=false;
    bandera = this.fun_validacion(this.objectPersona);
    if(bandera==true){
      return
    }

    Swal.fire({
      title: "Esta seguro que desea Guardar?",
      text: "Guardar!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Guardar!"
    }).then((result) => {
      if (result.isConfirmed) {
       // this.objectPersona.estado='';
        this.jsonPersona.push(this.objectPersona);
        Swal.fire({
          title: "Guardar!",
          text: "Guardado con exito.",
          icon: "success"
        });
      }
    });
   // this.objectPersona.apellido='';


  }

  fun_validacion(persona: any): boolean
  {
    if(persona.nombre == undefined){
      Swal.fire({
        title: "Error!",
        text: "debe Ingresar el nombre!",
        icon: "error"
      });
      return true;
    }
    if(persona.apellido == undefined){
      Swal.fire({
        title: "Error!",
        text: "debe Ingresar el apellido!",
        icon: "error"
      });
      return true;
    }
    if(persona.estado == undefined){
      Swal.fire({
        title: "Error!",
        text: "debe Ingresar estado!",
        icon: "error"
      });
      return true;
    }

    return false;
  }
fun_listar_persona_service(){
    this.servicePersona.listarPersonas().subscribe(res=>{
      console.log(res);
    })
}
  fun_cancelar($event: MouseEvent) {
    Swal.fire("Usted cancelo!");
  }
  fun_eliminar(e: any){
    Swal.fire({
      title: "Eliminar!",
      text: "Realmente desea Eliminar!",
      icon: "warning"
    });
  }
}
