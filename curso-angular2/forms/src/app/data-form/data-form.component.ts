import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { map } from 'rxjs';
@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder){

  }

  ngOnInit(): void {

   /* this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    }) */
    this.formulario = this.formBuilder.group({
      nome:[null],
      email: [null]
    })
  }

  onSubmit(){
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map((res: any) => res))
    .subscribe((dados: any) => {console.log(dados)
     //reseta o formulario
     this.resetar();
  },
    (erro:any) => alert ('erro'));

  }

  resetar(){
    this.formulario.reset();
  }


}
