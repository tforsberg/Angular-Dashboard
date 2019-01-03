import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
  constructor() {
  }
  options: string[];
  states: Array<any>;

  option: any;
  option2: any;

  object: any;
  object2: any;


  filterStates(val: string) {
    if (val) {
      const filterValue = val.toLowerCase();
      return this.options.filter(state => state.toLowerCase().startsWith(filterValue));
    }
    return this.options;
  }

  filterState2(val: string) {
    if (val) {
      val = val.toLowerCase();
      return this.states.filter(state => state.name.toLowerCase().startsWith(val))
    }

    return this.states;

  }

  filterStateglobal(val: string, object: any, propiedad: string) {
    if (val) {
      console.log(val);

      return object.filter(state => state[propiedad].startsWith(val));
    }
    return object;

  }

  ngOnInit() {
    this.options = ['One', 'Two', 'Three'];
    this.option = this.options;


    this.states = [
      {
        name: 'Arkansas',
        population: '2.978',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
      },
      {
        name: 'Arkansa',
        population: '39.14',
        // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
      },
      {
        name: 'Florida',
        population: '20.27',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
      },
      {
        name: 'Texas',
        population: '27.47M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
      }
    ]
    this.option2 = this.states;
    this.object2 = this.filterStateglobal('', this.states, 'population');
    // console.log("este es mi filtro nojoda", this.filterState2("Arkansas"));
    console.log('jsdsd');

  }

}
