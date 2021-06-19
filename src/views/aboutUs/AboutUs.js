/** @format */

import React from "react";
import InfoColumn from "../../components/infoColumn/InfoColumn";
import { AboutUsWrapper } from "./AboutUsStyles";

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <InfoColumn
        heading="NASZA MISJA"
        description="Nieprzerwanie od 1993 roku niesiemy pomoc potrzebującym zwierzętom. Całą dobę, siedem dni w tygodniu. Każdy z naszych pacjentów jest czyimś przyjacielem i właśnie tak go traktujemy – jak przyjaciela.
        Wszystkie oferowane zabiegi przeprowadzamy z najwyższą troską o bezpieczeństwo oraz spokój zwierzaków, korzystając wyłącznie z profesjonalnych metod i nowoczesnych urządzeń. Nasze indywidualne podejście do pacjentów zostało wielokrotnie docenione w postaci licznych nagród oraz wyróżnień w Polsce i za granicą. Kierujemy się wytycznymi i standardami przyjętymi jako wzory postępowania klinicznego w renomowanych specjalistycznych organizacjach – zarówno europejskich, jak i światowych."
      />
      <InfoColumn
        heading="MOC DOŚWIADCZENIA"
        description="Siłę naszej kliniki stanowią zaangażowani, wykwalifikowani pracownicy – wyszkolony i kompetentny średni personel. To doskonali specjaliści, których umiejętności, rzetelna praca oraz wkład w rozwój weterynarii były wielokrotnie nagradzane, również za granicą. Każdy z naszych pracowników ma własne zwierzę, dlatego doskonale wie, jak obchodzić się z pacjentami z najwyższą troską i empatią. Od wielu lat prowadzimy wymianę doświadczeń naukowych oraz edukacyjnych z partnerami w Polsce i za granicą, bierzemy także udział w rozmaitych projektach badawczych.
"
      />
      <InfoColumn
        heading="NAJWYŻSZY STANDARD"
        description="Przyjmowanym pacjentom gwarantujemy najlepsze możliwe warunki, dostosowane indywidualnie do każdego z nich. Nie tylko w gabinecie lekarskim czy na sali operacyjnej, ale nawet w poczekalni. Dbamy, by nie stresować zwierzaków na żadnym etapie wizyty, dlatego oddzielamy psy od kotów, natychmiast gdy znajdą się w naszej klinice. Z myślą o kotach oczekujących na przyjęcie przygotowaliśmy specjalny „koci kącik”, w którym mogą poczuć się bezpiecznie i swobodnie. Ponadto przyjmujemy je wyłącznie w gabinetach pozbawionych psich zapachów – ich miejsce zajmują kocie feromony. Dysponujemy dostępem do unikatowych leków, rozwiązań i technologii w zakresie leczenia chorób nowotworowych. Nieustannie inwestujemy w rozwój kliniki – jej wyposażenie, wykształcenie zespołu oraz infrastrukturę.
"
      />
    </AboutUsWrapper>
  );
};

export default AboutUs;
