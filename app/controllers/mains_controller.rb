class MainsController < ApplicationController

    def main
    end

    def impressum
    end

    def thank_you
        @name = params[:name]
        @email = params[:email]
        @message = params[:message]
        ActionMailer::Base.mail(from: 'your-email@example.com',
            to: @email,
            subject: "A new contact form message from #{@name}",
            body: @message).deliver_now
        # redirect_to root_path
      end

    def more
    end

end