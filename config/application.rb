require_relative 'boot'

require 'rails/all'
require 'log4r'
# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Renteninfo
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    outputter = Log4r::FileOutputter.new('log4r', filename: 'foobar.log')
    outputter.formatter = Log4r::PatternFormatter.new(
      date_pattern: "%FT%T.000Z", pattern: "%d [%l] %m"
    )
    
    logger = Log4r::Logger.new('log4r')
    logger.outputters = [outputter]
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end

ActionMailer::Base.smtp_settings = {
  address: 'smtp.sendgrid.net',
  port: '587',
  authentication: :plain,
  user_name: ENV['SENDGRID_USERNAME'],
  password: ENV['SENDGRID_PASSWORD'],
  domain: 'heroku.com',
  enable_starttls_auto: true
}