class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :ahome

  before_action :set_request_variant

  def after_sign_in_path_for(resource)
    admin_homes_path
  end

  protected

  def configure_permitted_parameters
    added_attrs = [ :email, :username, :password, :password_confirmation ]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
    devise_parameter_sanitizer.permit :sign_in, keys: added_attrs
  end

  def ahome

    @ahomes = Ahome.find(1)


  
  end

  private

  # Action Pack Variants向け
  def set_request_variant
    request.variant = request.device_type # :pc, :smartphone, etc
  end




end
