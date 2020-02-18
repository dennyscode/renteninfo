FROM ruby:2.6.4

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs yarn

RUN mkdir /rentenrechner

WORKDIR /rentenrechner

COPY Gemfile /rentenrechner/Gemfile

COPY Gemfile.lock /rentenrechner/Gemfile.lock

RUN gem update --system

RUN bundle install

COPY . /rentenrechner

RUN apt update && apt install yarn

ADD https://dl.yarnpkg.com/debian/pubkey.gpg /tmp/yarn-pubkey.gpg
RUN apt-key add /tmp/yarn-pubkey.gpg && rm /tmp/yarn-pubkey.gpg
RUN echo 'deb http://dl.yarnpkg.com/debian/ stable main' > /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -qq -y --no-install-recommends \
      curl

RUN apt-get remove cmdtest -y

RUN yarn install