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

  # POST /context.json
  # def create
    # new_context.save
    # if new_context.save
    #   # i = Context.includes(ItemsController.item_selection).find_by_id(new_item.id)
    #   # render json: i.as_json(ItemsController.item_as_json)
    # else
    #   format.json { render json: new_item.errors, status: :unprocessable_entity }
    # end
  # end

  # POST /contexts/1.json
  def update
    respond_to do |format|
      @id = params[:id]

      format.json{
        context = Context.find_by_id(params[:id])
        if context.update_attributes(context_params)
          render json: context.as_json()
        else
          render json: {"error"=>"context is nil"}
        end
      }
    end
  end


  # ------------
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


  # Never trust parameters from the scary internet, only allow the white list through.
  def context_params
    params.require(:context).permit(:name, :location)
  end


end
