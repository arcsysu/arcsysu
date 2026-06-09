FROM ruby:3.3

RUN apt-get update && apt-get install -y \
    git \
    curl \
    nodejs \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

RUN gem install bundler

WORKDIR /workspace
