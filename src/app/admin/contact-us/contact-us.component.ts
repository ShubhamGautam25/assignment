
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';

export interface State {
  name: string;
}

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUsForm : FormGroup;
  preLoader:boolean = false;

    constructor(private formBuilder : FormBuilder) {
      this.filteredStates = this.stateCtrl.valueChanges
        .pipe(
          startWith(''),
          map(state => state ? this._filterStates(state) : this.states.slice())
        );
      this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
          startWith(null),
          map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    }
    ngOnInit() {
      this.reset_Form();
    }
    reset_Form(){
      this.preLoader = false;
      this.contactUsForm = this.formBuilder.group(
        {
          name: ["", Validators.required],
          email: ["",
            [
              Validators.required,
              Validators.email
            ]
          ],
          phone: ["", Validators.required],
          date: ["", Validators.required],
          minimal: [""],
          disabled: [""],
          disabledResult: [""],
          multiple: [""],

        }
      );
    }

 /* Handle form errors in Angular 8 */
 public errorHandling = (control: string, error: string) => {
  return this.contactUsForm.controls[control].hasError(error);
};


   stateCtrl = new FormControl();
    filteredStates: Observable<State[]>;
    states: State[] = [
      {
        name: 'Arkansas'
      },
      {
        name: 'California'
      },
      {
        name: 'Florida'
      },
      {
        name: 'Texas'
      }
    ];

    MinimalStateList: string[] = ['Arkansas', 'Alaska', 'California', 'Delaware', 'Tennessee', 'Texas'];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Alaska'];
  allFruits: string[] = ['Arkansas', 'Alaska', 'California', 'Delaware', 'Tennessee', 'Texas'];


  @ViewChild('fruitInput', {static: false}) fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  
    private _filterStates(value: string): State[] {
      const filterValue = value.toLowerCase();
      return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
    }
    private _filter(value: string) {
      const filterValue = value.toLowerCase();
  
      return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    }
    onStateChange(){
      
    }


  add(event: MatChipInputEvent) {
    // Add fruit only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) { } {
      const input = event.input;
      const value = event.value;

      // Add our fruit
      if ((value || '').trim()) {
        this.fruits.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.fruitCtrl.setValue(null);
    }
  }

remove(fruit: string) {
    const index = this.fruits.indexOf(fruit);
    if (index >= 0 ) {
      this.fruits.splice(index, 1);
    }
  }


selected(event: MatAutocompleteSelectedEvent) {
  console.log("event",event.option.viewValue);
  this.contactUsForm.controls['multiple'].setValue(this.fruits);
   console.log("sassaa",this.fruits.push(event.option.viewValue));
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  ContactUs(){
    console.log(this.stateCtrl.value);
    this.contactUsForm.controls['disabledResult'].setValue(this.stateCtrl.value);
    console.log(this.contactUsForm.value);
   }
  
}
