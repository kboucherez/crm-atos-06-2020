import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public states = Object.values(StateClient);
  public form: FormGroup;
  @Input() initItem: Client;
  @Output() submited: EventEmitter<Client> = new EventEmitter();
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.initItem.name],
      ca: [this.initItem.ca],
      tva: [this.initItem.tva],
      state: [this.initItem.state],
      comment: [this.initItem.comment],
      id: [this.initItem.id]
    });
  }
  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }
}
