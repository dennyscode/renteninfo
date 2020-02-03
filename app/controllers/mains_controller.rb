class MainsController < ApplicationController
  include MainsHelper
  include Rails.application.routes.url_helpers
    def main
      @posts = Post.all.page(params[:page]).per(3)
    end

    def info
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
      UserMailer.with(name: @name, email: @email, message: @message).welcome_email.deliver_now
      redirect_to mains_thank_you_path
    end

    def thank_you
    end

    def more
    end

end