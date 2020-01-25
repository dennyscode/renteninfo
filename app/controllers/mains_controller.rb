class MainsController < ApplicationController
  include MainsHelper

    def main
      @test = image_url_from_active_storage()
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
      UserMailer.with(user: @user, email: @email, message: @message).welcome_email.deliver_now
      redirect_to mains_thank_you_path
    end

    def thank_you
    end

    def more
    end

end