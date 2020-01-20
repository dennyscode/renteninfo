class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    before_action :body_page_name

    private
    def body_page_name
        @body_page_name ||=[controller_name.camelcase.gsub('::',''),action_name.camelcase].join
    end
end
