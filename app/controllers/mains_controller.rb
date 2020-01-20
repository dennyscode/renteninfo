class MainsController < ApplicationController

    def main
    end

    def impressum
    end

    def contact
    end

    def team
    end

    def contact_sent
        data = params[:body]
        subject=params[:subject]
        user = params[:email]
        UserMailer.mail_method(data,user,subject).deliver
        flash[:success] = "Die Kontaktmail wurde erfolgreich versandt. Wir werden uns zeitnah bei Ihnen melden."
        redirect_to root_path
      end

    def thank_you
        @name = params[:name]
        @email = params[:email]
        @message = params[:message]
        ActionMailer::Base.mail(from: 'your-email@example.com',
            to: 'sander.bewerbung@gmx.de',
            subject: "A new contact form message from #{@name}",
            body: @message).deliver_now
        # redirect_to root_path
      end

    def more
    end

end