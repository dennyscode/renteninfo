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
      @name = params[:name]
      @email = params[:email]
      @message = params[:message]
      ActionMailer::Base.mail(from: 'your-email@example.com',
          to: 'sander.bewerbung@gmx.de',
          subject: "A new contact form message from #{@name}",
          body: @message).deliver_now
      flash[:success] = "Die Kontaktmail wurde erfolgreich versandt. Wir werden uns zeitnah bei Ihnen melden."
      redirect_to mains_thank_you_path
    end

    def thank_you
    end

    def more
    end

end