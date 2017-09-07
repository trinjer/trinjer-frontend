import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from './services/registration.service';
import {RegistrationUserModel} from './models/registration-user.model';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
	formGroup: FormGroup;

	constructor(private formBuilder: FormBuilder, private registrationService: RegistrationService) {
		const firstName = ['', Validators.required];
		const lastName = ['', Validators.required];
		const password = ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]];
		const email = ['', Validators.email];

		this.formGroup = this.formBuilder.group({firstName, lastName, password, email});
	}

	ngOnInit() {
	}

	onSubmit(event: Event): void {
		event.preventDefault();
		if (this.formGroup.valid) {
			this.registerUser();
		} else {
			this.markFormDirty();
		}
	}

	private markFormDirty(): void {
		Object.keys(this.formGroup.controls)
			.forEach(key => this.formGroup.controls[key].markAsTouched());
	}

	private registerUser(): void {
		this.registrationService.register(this.user).subscribe(token => console.log(token));
	}

	private get user(): RegistrationUserModel {
		const userModel = new RegistrationUserModel();
		userModel.firstName = this.formGroup.value['firstName'];
		userModel.lastName = this.formGroup.value['lastName'];
		userModel.password = this.formGroup.value['password'];
		userModel.email = this.formGroup.value['email'];
		return userModel;
	}

}
