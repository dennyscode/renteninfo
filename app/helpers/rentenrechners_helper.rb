module RentenrechnersHelper

    

    def hilfsvar1(rente_start, rente_kinder)
        rente_vwerwerbsjahre = Time.now.year.to_i - rente_start.to_i + (rente_kinder.to_i * 3)
        puts "Hilfsvariable 1) #{rente_vwerwerbsjahre}"
        return rente_vwerwerbsjahre
    end

    def hilfsvar2(rente_reg)
        rente_reg = rente_reg.to_i,

        if (rente_reg == 0)
            rente_vreg = 31.89
        else
            rente_vreg = 33.05
        end
        puts "Hilfsvariable 2) #{rente_vreg}"
        return rente_vreg
    end

    def hilfsvar3(rente_eink, durchschnittsentgeltRV)
        rente_ventgeltpunkte = (rente_eink.to_i*100/durchschnittsentgeltRV)*0.01
        puts "Hilfsvariable 3) #{rente_ventgeltpunkte}"
        return rente_ventgeltpunkte
    end

    def hilfsvar4(rente_dauer)
        rente_dauer = rente_dauer.to_i
        rente_vBisZurRente = (rente_dauer + 67) - (Time.now.year.to_i - 1)
        return rente_vBisZurRente
    end

    def hilfsvar5(rente_estimate, rente_vwerwerbsjahre, rente_vBisZurRente, rente_vreg)
        rente_vBenoetigt = rente_estimate.to_i / rente_vwerwerbsjahre.to_i + rente_vBisZurRente.to_i * rente_vreg.to_i
        return rente_vBenoetigt
    end

    def rente_heute(rente_ventgeltpunkte, rente_vreg, rente_vwerwerbsjahre)
        rente_vHeute = rente_ventgeltpunkte * rente_vreg * rente_vwerwerbsjahre
        return rente_vHeute
    end

    def rente_fiktiv(rente_vBenoetigt, rente_vreg, rente_vwerwerbsjahre)
        rente_fiktiv = rente_vBenoetigt.to_i*rente_vreg.to_i/rente_vwerwerbsjahre.to_i
        return rente_fiktiv
    end

    def notwendiges_gehalt(rente_vBenoetigt, rente_eink)
        rente_notwendig = ((rente_vBenoetigt.to_i*100)*rente_eink.to_i)/100
        return rente_notwendig
    end

    def notwendige_jahre(rente_estimate, rente_ventgeltpunkte, rente_vreg, rente_vwerwerbsjahre, rente_vBisZurRente, durchschnittsentgeltRV)
        rente_notwendigJahre = (rente_estimate.to_i/durchschnittsentgeltRV.to_i*rente_vreg.to_i)-(rente_vwerwerbsjahre.to_i + rente_vBisZurRente.to_i)
        return rente_notwendigJahre
    end

    def hochrechnung(rente_heute, rente_ventgeltpunkte, rente_vreg, rente_vBisZurRente)
        rente_hochrechnung = rente_heute + rente_ventgeltpunkte*rente_vreg*rente_vBisZurRente
        return rente_hochrechnung
    end

    def hochrechnungMitAnpassung(rente_heute, rente_ventgeltpunkte, rente_vreg, rente_dauer, rente_vBisZurRente)
        rente_hochrechnungMitAnpassung = rente_heute.to_i + rente_ventgeltpunkte.to_i*rente_vreg.to_i*1.01*(rente_dauer.to_i+67)-(Time.now.year.to_i+1)*rente_vBisZurRente.to_i
        return rente_hochrechnungMitAnpassung
    end
end