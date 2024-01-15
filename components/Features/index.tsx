import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Nuestros valores"
            paragraph="Responsabilidad, democracia, igualdad, equidad, solidaridad, Ayuda Mutua, entre asociados, entre cooperativas y con la comunidad."
            center
          />
          <SectionTitle
            title="Nuestra misión"
            paragraph="ofrecer alimentos de calidad, sabrosos y saludables, aportando valor a los cereales de la región."
            center
          />
          <SectionTitle
            title="Nuestra visión"
            paragraph="que nos elijan por la excelencia de los productos y servicios, al mejor precio, brindando satisfacción a los clientes."
            center
          />
          <SectionTitle
            title="Nuestros productos"
            paragraph="Elaboramos cereales para desayuno, avenas arrolladas, salvado y harina de avena."
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
