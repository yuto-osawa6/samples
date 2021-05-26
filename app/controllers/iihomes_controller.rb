class IihomesController < ApplicationController
  def youtube
    @iihome = Iihome.find(params[:id])
    # @youtube = @iihomes.youtube.last(11)
    respond_to do |format|
      format.html
      format.json
    end
  end
end
