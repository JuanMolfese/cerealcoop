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
            paragraph="Ofrecer alimentos de calidad, sabrosos y saludables, aportando valor a los cereales de la región."
            center
          />
          <SectionTitle
            title="Nuestra visión"
            paragraph="Que nos elijan por la excelencia de los productos y servicios, al mejor precio, brindando satisfacción a los clientes."
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, sunt autem accusamus doloribus eveniet dolor temporibus nam tenetur voluptatum non consequatur officia rem veritatis commodi, praesentium eaque fuga quaerat cum.
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi amet commodi maiores minus harum voluptatum dolorum delectus quaerat veritatis rem repudiandae ratione dolores sit earum, sint quo autem, id magnam.
                </p>
              </div>
            </div>

            <div className="w-full">
              
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere magnam tempore, sunt architecto porro similique dolorum ea magni optio quaerat, ducimus nihil aliquid, reiciendis doloribus illum dignissimos unde obcaecati.
                </p>
              
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit libero velit pariatur alias corrupti sequi cum, doloremque illum molestiae quidem et ratione expedita minus laboriosam explicabo ea nostrum recusandae? Saepe.
                </p>
              </div>
            </div>

            <div className="w-full">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                  <Image
                    src="/images/features/azucarado2.png"
                    width={70}
                    height={70}
                    alt="Imagen producto"
                  />
                </div>
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Cereal azucarado
                </h3>
                <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquam deserunt rerum nulla pariatur sint fugiat reiciendis repellendus reprehenderit consequuntur quaerat, culpa, praesentium quos voluptates numquam suscipit provident consectetur iure!
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
