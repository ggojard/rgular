class ContextsController < ApplicationController

  def index
    respond_to do |format|
      @id = params[:id]
      gon.id = @id.to_i

      format.json{
        @contexts = Context.all
        if !@contexts.nil?
          render json: @contexts.as_json()
        else
          render json: {"error"=>"context is nil"}
        end
      }
    end
  end


  def show
    respond_to do |format|
      @id = params[:id]
      gon.id = @id.to_i

      format.html {
        # if !authorize_read? @context; return render_404 end
        # @context = Context.find_by_id(params[:id])
        # cjson.context = @context.as_json(:methods =>[:name, :location]);
        # cjson.mode = 'show'
      }
      format.json{
        @context = Context.find_by_id(params[:id])
        if !@context.nil?
          render json: @context.as_json()
        else
          render json: {"error"=>"context is nil"}
        end
      }
    end
  end

end
