import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface fontStyleProps {
  value: string;
  viewValue: string;
}

interface iconStyleProps {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'business-card';

  formData: FormGroup;
  formLayout: FormGroup;

  chosenFontStyle: string = 'Roboto';

  fontStyle: fontStyleProps[] = [
    {value: "'Roboto', sans-serif", viewValue: 'Roboto'},
    {value: "'Bebas Neue', sans-serif", viewValue: 'Bebas Neue'},
    {value: "'Gruppo', sans-serif", viewValue: 'Gruppo'},
    {value: "'Lobster', cursive", viewValue: 'Lobster'},
    {value: "'Vast Shadow', serif", viewValue: 'Vast Shadow'},
    {value: "'Londrina Shadow', cursive", viewValue: 'Londrina'},
  ];

  chosenIconStyle: string = 'account_circle';

  iconStyle: iconStyleProps[] = [
    {value: "account_circle", viewValue: 'Icone de Usuario'},
    {value: "star", viewValue: 'Estrela'},
    {value: "directory_sync", viewValue: 'Reciclar'},
    {value: "rocket_launch", viewValue: 'Foguete'},
    {value: "forest", viewValue: 'Arvores'},
    {value: "camera", viewValue: 'Camera'},
    {value: "music_note", viewValue: 'Nota de musica'},
  ];

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // })

    this.formData = this.formBuilder.group({
      dados: this.formBuilder.group({
        nome: [null, [Validators.required, Validators.maxLength(25)]],
        idade: [null, [Validators.required, Validators.maxLength(3)]],
        telefone: [null, [Validators.required, Validators.maxLength(9), Validators.minLength(8)]],
        email: [null, [Validators.required, Validators.email]],
      }),
      endereco: this.formBuilder.group({
        endereco: [null, [Validators.required]],
        numeroEndereco: [null, [Validators.required, Validators.maxLength(8)]],
        bairro: [null, [Validators.required, Validators.maxLength(25)]],
        cidade: [null, [Validators.required, Validators.maxLength(25)]]
      }),
      
    })

    // this.formData = this.formBuilder.group({
    //   dados: this.formBuilder.group({
    //     nome: ['joão lopes', [Validators.required, Validators.maxLength(25)]],
    //     idade: [20, [Validators.required, Validators.maxLength(3)]],
    //     telefone: [980319583, [Validators.required, Validators.maxLength(9), Validators.minLength(8)]],
    //     email: ['joaovlopesmartins@gmail.com', [Validators.required, Validators.email]],
    //   }),
    //   endereco: this.formBuilder.group({
    //     endereco: ['rua sete mil e quatro', [Validators.required]],
    //     numeroEndereco: [90, [Validators.required, Validators.maxLength(8)]],
    //     bairro: ['restinga', [Validators.required, Validators.maxLength(25)]],
    //     cidade: ['porto alegre', [Validators.required, Validators.maxLength(25)]]
    //   }),
      
    // })

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

  submitForm(form: any) {
    event?.preventDefault();
    console.log('formulario enviado', this.formData);
  }

  changeColor() {
    let card = document.getElementById('futureCard')

    card.style.backgroundColor = this.formLayout.value.layoutCard.background;

    let divIconAndName = document.getElementById('iconAndName')

    divIconAndName.style.backgroundColor = this.formLayout.value.layoutCard.corPrincipal;

    // -----------------------------------------------------------------

    let iconDataColor: any = document.getElementsByClassName('changeIconDataColor')

    for (let i = 0; i < iconDataColor.length; i++) {
      iconDataColor[i].style.color = this.formLayout.value.layoutCard.iconDataColor;
    }

    let textDataColor: any = document.getElementsByClassName('changeTextDataColor')

    for (let i = 0; i < textDataColor.length; i++) {
      textDataColor[i].style.color = this.formLayout.value.layoutCard.textDataColor;
    }

    // -----------------------------------------------------------------

    let FontName = document.getElementById('changeColorFontName')

    FontName.style.color = this.formLayout.value.layoutCard.colorFontName;
    FontName.style.fontFamily = this.formLayout.value.layoutCard.styleFontName;

    // -----------------------------------------------------------------

    let colorIcon = document.getElementById('changeIconColor')

    colorIcon.style.color = this.formLayout.value.layoutCard.colorIcon;

  }
}
