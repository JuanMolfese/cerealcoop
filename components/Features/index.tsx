import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
/* import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData"; */

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
            {/* {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))} */}
            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <Image
                    src="/images/features/avena.png"
                    width={70}
                    height={70}
                    alt="Imagen producto"
                  />
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Avena 
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  La mejor avena
                </p>
              </div>
            </div>

            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <Image
                    src="/images/features/avena_ext.png"
                    width={70}
                    height={70}
                    alt="Imagen producto"
                  />
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Avena Extrusada
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  La mejor avena
                </p>
              </div>
            </div>

            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <Image
                    src="/images/features/avena_tradicional.png"
                    width={70}
                    height={70}
                    alt="Imagen producto"
                  />
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Avena Tradicional
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  La mejor avena
                </p>
              </div>
            </div>

            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <Image
                    src="/images/features/avena_instantanea.png"
                    width={70}
                    height={70}
                    alt="Imagen producto"
                  />
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Avena Instantanea
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  La mejor avena
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
