class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    before_action :body_page_name

    # helper_method :current_user, :logged_in?


    # def current_user
    #     @current_user ||= User.find(session[:userid]) if session[:user_id]
    # end

    # def logged_in?
    #     (!!) current_user
    # end

    # def require_user
    #     if !logged_in?
    #         flash[:danger] = "You must be logged in to perform that action"
    #         redirect_to root_path
    #     end
    # end

    private
    def body_page_name
        @body_page_name ||=[controller_name.camelcase.gsub('::',''),action_name.camelcase].join
    end
end
