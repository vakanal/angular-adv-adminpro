import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // * Promises
    this.getUsuariosPromise()
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
      .finally(() => console.log('Usuarios con Promises'));

    // * Async / Await
    this.getUsuariosAsyncAwait()
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
      .finally(() => console.log('Usuarios con Async/Await'));
  }

  getUsuariosPromise(): Promise<void> {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data))
        .catch((err) => reject(err));
    });
  }

  async getUsuariosAsyncAwait(): Promise<void> {
    return await fetch('https://reqres.in/api/users?page=2')
      .then((resp) => resp.json())
      .then((body) => body.data)
      .catch((err) => err);
  }
}
