require 'aws-sdk-s3'

s3 = Aws::S3::Resource.new(region: "eu-central-1", credentials: Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY']))
bucket = s3.bucket(ENV['AWS_BUCKET'])