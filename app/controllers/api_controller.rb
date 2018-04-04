class ApiController < ApplicationController
  protect_from_forgery with: :null_session


    def authenticate!
      if current_user
        :authenticate_user!
      elsif current_host
        :authenticate_host!
      end
    end
end
