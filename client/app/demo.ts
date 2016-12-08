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
        this.btnSend = 'Send';
        this.errorMsg = '';
        this.recipient = 'tyvain@gmail.com';
    }


    public onCreate() {
        if(this.recipient && this.subject && this.message) {
            this.submitDisabled = true;
            this.btnSend = 'Sending...';
            var data = {
                recipient: this.recipient,
                subject: this.subject,
                message: this.message,
            }
            let headers = new Headers({ 'Content-Type': 'application/json' });
            this.http.post('/mail/create', JSON.stringify(data), { headers: headers }).subscribe(
                result => {
                    var data = JSON.parse(result._body);
                    this.successMsg = data.message;
                    this.submitDisabled = false;
                    this.btnSend = 'Send';
                    this.recipient = '';
                    this.subject = '';
                    this.message = '';
                },error => {
                    var error = JSON.parse(error._body);
                    this.errorMsg = error.message;
                    this.submitDisabled = false;
                    this.btnSend = 'Send';
                    console.log(error);
                }
                );
        }
    }
}