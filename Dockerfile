FROM ruby:2.6.4

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev apt-utils

RUN mkdir /renteninfo

WORKDIR /renteninfo

COPY Gemfile /renteninfo/Gemfile

COPY Gemfile.lock /renteninfo/Gemfile.lock

RUN gem update --system

RUN bundle install

COPY . /rentenrechner

ADD https://dl.yarnpkg.com/debian/pubkey.gpg /tmp/yarn-pubkey.gpg
RUN apt-key add /tmp/yarn-pubkey.gpg && rm /tmp/yarn-pubkey.gpg
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN echo 'deb http://dl.yarnpkg.com/debian/ stable main' > /etc/apt/sources.list.d/yarn.list
RUN apt-get install -y nodejs
RUN apt-get update && apt-get install -qq -y --no-install-recommends \
      curl
RUN apt update && apt install yarn

RUN apt-get remove cmdtest -y

RUN yarn --version

RUN yarn install

RUN bundle update

RUN yarn install --check-files
