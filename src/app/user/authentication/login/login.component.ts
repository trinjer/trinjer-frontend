import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Credentials} from './models/credentials.interface';
import {LoginService} from './services/login.service';
import {ErrorTypes} from '../errors/error-types';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
	form: FormGroup;

	constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
	}

	ngOnInit() {
		this.form = this.formBuilder.group({
			login: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]]
		});
	}

	onSubmit(): void {
		if (this.form.valid) {
			this.loginService.login(this.credentials).subscribe(
				token => console.log(`Success authentication with tokens: ${JSON.stringify(token)}`),
				(error: Error) => {
					if (error.name === ErrorTypes.AUTHORIZATION) {
						console.log('Authentication failed!');
					}
				}
			);
		}
	}

	private get credentials(): Credentials {
		if (this.form.invalid) {
			throw new Error('Can`t get data from invalid form!');
		}

		return {
			email: this.form.value['login'],
			password: this.form.value['password']
		}
	}
}
