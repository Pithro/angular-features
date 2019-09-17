import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAsCommunicatorService {
  private eventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setText(value: any) {
    this.eventEmitter.emit(value);
  }

  getEmitter() {
    return this.eventEmitter;
  }
}
