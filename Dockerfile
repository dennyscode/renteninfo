FROM ruby:2.6.4

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs

RUN mkdir /rentenrechner

WORKDIR /rentenrechner

COPY Gemfile /rentenrechner/Gemfile

COPY Gemfile.lock /rentenrechner/Gemfile.lock

RUN gem update --system

RUN bundle install

COPY . /rentenrechner

RUN yarn install --check-files

RUN WEBPACKER_DEV_SERVER_HOST=0.0.0.0 ./bin/webpack-dev-server