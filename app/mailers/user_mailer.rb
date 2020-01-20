class UserMailer < ApplicationMailer
    default from: 'kontaktformular@renteninfo.com'
 
    def welcome_email
      @user = params[:user]
      @url  = 'http://example.com/login'
      mail(to: "sander.bewerbung@gmx.de", subject: 'Willkommen zum Renteninfo-Test')
    end

    def mail_method(data,email,subject)
      @body=data
      mail(to: email, subject: subject)
    end

end
