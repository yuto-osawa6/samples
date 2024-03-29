if Rails.env.production?
  CarrierWave.configure do |config|
    config.fog_credentials = {
      provider: "AWS",
      # aws_access_key_id: Rails.application.credentials.dig(:aws, :access_key_id),
      # aws_secret_access_key: Rails.application.credentials.dig(:aws, :secret_access_key),

      aws_access_key_id: Rails.application.credentials.dig(:aws2, :access_key_id),
      aws_secret_access_key: Rails.application.credentials.dig(:aws2, :secret_access_key),
      region: "ap-northeast-1"
    }
    config.fog_directory = "filmmonkey-baket"
  end
end