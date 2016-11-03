class HomeController < ApplicationController
  inherit_resources
  respond_to :html, :json, :xml

  def index
  	render html: "HomeController html render"
  end

end