class EehomesController < ApplicationController
  def youtube
    @eehome = Eehome.find(params[:id])
    # @youtube = @iihomes.youtube.last(11)
    respond_to do |format|
      format.html
      format.json
    end
  end
end
