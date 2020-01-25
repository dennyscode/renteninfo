class UserMailer < ApplicationMailer
    default from: 'kontaktformular@renteninfo.com'
 
    def welcome_email
      @name = params[:name]
      @email = params[:email]
      @message = params[:message]
      @url  = 'http://example.com/login'
      mail(to: "sander.bewerbung@gmx.de", subject: 'Willkommen zum Renteninfo-Test')
    end

end
