class RentenrechnersController < ApplicationController
  before_action :set_rentenrechner, only: [:show, :edit, :update, :destroy]
  include RentenrechnersHelper


  # GET /rentenrechners
  # GET /rentenrechners.json
  def index
    @rentenrechners = Rentenrechner.all
  end

  # GET /rentenrechners/1
  # GET /rentenrechners/1.json
  def show
    @rentenrechner = Rentenrechner.find(params[:id])
    params.permit(:rente_estimate, :rente_art, :rente_start, :rente_dauer, :rente_eink, :rente_reg, :rente_kinder, :rente_kinder_gebjahr, :rente_betrieb)
    @durchschnittsentgeltRV_2019 = 38901
    @hilfsvar1 = hilfsvar1(@rentenrechner.rente_start, @rentenrechner.rente_kinder) #rente_vwerwerbsjahre
    @hilfsvar2 = hilfsvar2(@rentenrechner.rente_reg) #rente_vreg
    @hilfsvar3 = hilfsvar3(@rentenrechner.rente_eink, @durchschnittsentgeltRV_2019) #rente_ventgeltpunkte
    @hilfsvar4 = hilfsvar4(@rentenrechner.rente_dauer) #rente_VBisZurRente
    @hilfsvar5 = hilfsvar5(@rentenrechner.rente_estimate, @hilfsvar1, @hilfsvar4, @hilfsvar2) #rente_vBenoetigt
    @rente_heute = rente_heute(@hilfsvar3, @hilfsvar2, @hilfsvar1)
    @rente_fiktiv = rente_fiktiv(@hilfsvar5, @hilfsvar2, @hilfsvar1)
    @rente_notwendig = notwendiges_gehalt(@hilfsvar5, @rentenrechner.rente_eink)
    @rente_notwendigJahre = notwendige_jahre(@rentenrechner.rente_estimate, @hilfsvar3, @hilfsvar2, @hilfsvar1, @hilfsvar5, @durchschnittsentgeltRV_2019)
    @rente_hochrechnung = hochrechnung(@rente_heute, @hilfsvar3, @hilfsvar2, @hilfsvar4)
    @rente_hochrechnungMitAnpassung = hochrechnungMitAnpassung(@rente_heute, @hilfsvar3, @hilfsvar2,@rentenrechner.rente_dauer,@hilfsvar4)
  end

  # GET /rentenrechners/new
  def new
    @rentenrechner = Rentenrechner.new
  end

  # GET /rentenrechners/1/edit
  def edit
  end

  # POST /rentenrechners
  # POST /rentenrechners.json
  def create
    @rentenrechner = Rentenrechner.new(rentenrechner_params)

    respond_to do |format|
      if @rentenrechner.save
        format.html { redirect_to @rentenrechner, notice: 'Rentenrechner was successfully created.' }
        format.json { render :show, status: :created, location: @rentenrechner }
      else
        format.html { render :new }
        format.json { render json: @rentenrechner.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /rentenrechners/1
  # PATCH/PUT /rentenrechners/1.json
  def update
    respond_to do |format|
      if @rentenrechner.update(rentenrechner_params)
        format.html { redirect_to @rentenrechner, notice: 'Rentenrechner was successfully updated.' }
        format.json { render :show, status: :ok, location: @rentenrechner }
      else
        format.html { render :edit }
        format.json { render json: @rentenrechner.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /rentenrechners/1
  # DELETE /rentenrechners/1.json
  def destroy
    @rentenrechner.destroy
    respond_to do |format|
      format.html { redirect_to rentenrechners_url, notice: 'Rentenrechner was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rentenrechner
      @rentenrechner = Rentenrechner.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def rentenrechner_params
      params.require(:rentenrechner).permit(:rente_estimate, :rente_art, :rente_start, :rente_dauer, :rente_eink, :rente_reg, :rente_kinder, :rente_kinder_gebjahr, :rente_betrieb)
    end
end
