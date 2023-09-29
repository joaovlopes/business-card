import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { styleFieldsToChange } from '../consts/styleFieldsChange'
import { fontStyle } from '../consts/fontStyle'
import { iconStyle } from 'src/consts/iconStyle';
import { dataView } from 'src/consts/dataView';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'business-card';

  formData: FormGroup;
  formLayout: FormGroup;

  constStyleFieldsChange = styleFieldsToChange;

  constFontStyle = fontStyle;
  chosenFontStyle: string = 'Roboto';

  constIconStyle = iconStyle;
  chosenIconStyle: string = 'account_circle';

  constDataView = dataView

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.formData = this.formBuilder.group({
      dados: this.formBuilder.group({
        nome: [
          null, [
            Validators.required, 
            Validators.maxLength(25)
          ]
        ],
        idade: [
          null, [
            Validators.required, 
            Validators.maxLength(3),
            Validators.min(1)
          ]
        ],
        telefone: [
          null, [
            Validators.required, 
            Validators.maxLength(16), 
            Validators.minLength(8)
          ]
        ],
        email: [
          null, [
            Validators.required, 
            Validators.email
          ]
        ],
      }),
      endereco: this.formBuilder.group({
        endereco: [
          null, [
            Validators.required
          ]
        ],
        numeroEndereco: [null, 
          [
            Validators.required, 
            Validators.maxLength(8),
            Validators.min(0)
          ]
        ],
        bairro: [
          null, [
            Validators.required, 
            Validators.maxLength(25)
          ]
        ],
        cidade: [
          null, [
            Validators.required, 
            Validators.maxLength(25)
          ]
        ]
      }),
      
    })

    this.formLayout = this.formBuilder.group({
      layoutCard: this.formBuilder.group({
        corPrincipal: ['#00b764'],
        background: ['#363636'],
        iconDataColor: ['#ffffff'],
        textDataColor: ['#ffffff'],
        styleFontName: ["'Roboto', sans-serif"],
        colorFontName: ['#ffffff'],
        styleIcon: ['account_circle'],
        colorIcon: ['#ffffff'],
      })
      
    })

  }

  submitFormData() {
    event?.preventDefault();

    Object.values(this.constDataView).forEach(data => {
      data.viewValue = this.formData.value[data.form][data.value]
    })

     this.constDataView.nome.viewValue = this.formData.value.dados.nome

     console.log(this.formData)

  }

  submitFormLayout() {
    event?.preventDefault();

    this.constStyleFieldsChange.forEach(field => {

      let fieldvalue

      field.changeAttributes.forEach(attributes => {
        switch (field.type) {

          case 'id':
            fieldvalue = document.getElementById(field.name)
            fieldvalue.style[attributes.attribute] = this.formLayout.value.layoutCard[attributes.origin]
            break;
          
          case 'class': 
            fieldvalue = document.getElementsByClassName(field.name)
            for (let i = 0; i < fieldvalue.length; i++) {
                fieldvalue[i].style[attributes.attribute] = this.formLayout.value.layoutCard[attributes.origin];
              }
            break;
        }
      })

    })

  }
}
