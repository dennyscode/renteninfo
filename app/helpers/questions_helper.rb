module QuestionsHelper

    def test
        puts "huhu"
    end

    def hilfsvar1(rente_estimate, rente_art, rente_start, rente_dauer, rente_eink, rente_reg, rente_kinder, rente_kinder_gebjahr, rente_betrieb)
        puts "#{rente_estimate}, #{rente_art}, #{rente_start}, #{rente_dauer}, #{rente_eink}, #{rente_reg}, #{rente_kinder}, #{rente_kinder_gebjahr}, #{rente_betrieb}"
        rente_vwerwerbsjahre = Time.now.year.to_i - rente_start.to_i + rente_kinder.to_i
        puts "Hilfsvariable 1) #{rente_vwerwerbsjahre}"
    end

    def hilfsvar2(rente_estimate, rente_art, rente_start, rente_dauer, rente_eink, rente_reg, rente_kinder, rente_kinder_gebjahr, rente_betrieb)
        rente_reg = rente_reg.to_i,

        if (rente_reg == 0)
            rente_vreg = 31.89
        else
            rente_vreg = 33.05
        end
        puts "#{rente_estimate}, #{rente_art}, #{rente_start}, #{rente_dauer}, #{rente_eink}, #{rente_reg}, #{rente_kinder}, #{rente_kinder_gebjahr}, #{rente_betrieb}"

        puts "Hilfsvariable 2) #{rente_vreg}"
        return rente_vreg
    end

    def hilfsvar3(rente_estimate, rente_art, rente_start, rente_dauer, rente_eink, rente_reg, rente_kinder, rente_kinder_gebjahr, rente_betrieb)
        puts "#{rente_estimate}, #{rente_art}, #{rente_start}, #{rente_dauer}, #{rente_eink}, #{rente_reg}, #{rente_kinder}, #{rente_kinder_gebjahr}, #{rente_betrieb}"
        rente_ventgeltpunkte = (rente_eink*100/rente_eink)*0.01
        puts "Hilfsvariable 3) #{rente_ventgeltpunkte}"
        return rente_ventgeltpunkte
    end

end
