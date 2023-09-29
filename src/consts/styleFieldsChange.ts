interface styleFieldsToChangeProps {
  name: string;
  type: string;
  changeAttributes: Array <attributesProps>;
}

interface attributesProps {
  origin: string;
  attribute: string;
}

export const styleFieldsToChange: Array <styleFieldsToChangeProps> = [
  {
    name: 'changeFutureCard', 
    type: 'id', 
    changeAttributes: [
      {
        origin: 'background',
        attribute: 'backgroundColor'
      }
    ]
  },
  {
    name: 'changeIconAndName', 
    type: 'id',
    changeAttributes: [
      {
        origin: 'corPrincipal',
        attribute: 'backgroundColor'
      }
    ]
  },
  {
    name: 'changeIconDataColor',
    type: 'class', 
    changeAttributes: [
      {
        origin: 'iconDataColor',
        attribute: 'color'
      }
    ]
  },
  {
    name: 'changeTextDataColor', 
    type: 'class', 
    changeAttributes: [
      {
        origin: 'textDataColor',
        attribute: 'color'
      },
    ]
  },
  {
    name: 'changeColorFontName', 
    type: 'id', 
    changeAttributes: [
      {
        origin: 'colorFontName',
        attribute: 'color'
      },
      {
        origin: 'styleFontName',
        attribute: 'fontFamily'
      }
    ]
  },
  {
    name: 'changeIconColor', 
    type: 'id', 
    changeAttributes: [
      {
        origin: 'colorIcon',
        attribute: 'color'
      },
    ]
  },
]