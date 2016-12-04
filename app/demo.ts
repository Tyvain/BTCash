import { Component }  from 'angular2/core';
import { Http, Headers, RequestOptions } from "angular2/http";

@Component({
  selector: 'my-app',
  templateUrl: 'app/contact.html'
})

export class DemoComponent { 

	public recipient: string;
    public subject: string;
    public message: string;

	public constructor(private http: Http) {
        this.submitDisabled = false;
        this.successMsg = '';
        this.errorMsg = '';
    }


	public onCreate() {
        if(this.recipient && this.subject && this.message) {
            this.submitDisabled = true;
            var data = {
                recipient: this.recipient,
                subject: this.subject,
                message: this.message,
            }
            let headers = new Headers({ 'Content-Type': 'application/json' });
            this.http.post('http://localhost:8000/mail/create', JSON.stringify(data), { headers: headers }).subscribe(
                result => {
                    var data = JSON.parse(result._body);
                    this.successMsg = data.message;
                    this.submitDisabled = false;
                    this.recipient = '';
                    this.subject = '';
                    this.message = '';
                },error => {
                    var error = JSON.parse(error._body);
                    this.errorMsg = error.statusCode;
                    this.submitDisabled = false;
                    console.log(error);
                }
                );
        }
    }
}