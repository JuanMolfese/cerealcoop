import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section id="features" className="mt-10 py-16 md:py-20 lg:py-28">
        <div className="container">          
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
              <div className="mb-10 flex h-[270px] w-[100] items-center justify-center rounded-md bg-green bg-opacity-5 text-green drop-shadow-lg">
                <Image
                  src="/images/features/copo_azucarado.png"
                  width={140}
                  height={140}                  
                  alt="Imagen de Copo Azucarado"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Copos Azucarados
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              Contiene 200 gramos. Caja por 44 unidades.
              </p>              
            </div>

            <div className="w-full">              
              <div className="mb-10 flex h-[270px] w-[100] items-center justify-center rounded-md bg-green bg-opacity-5 text-green drop-shadow-lg">
                <Image
                  src="/images/features/copo_maiz.png"
                  width={140}
                  height={140}                  
                  alt="Imagen de Copo Maiz"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Copos de Maiz
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              Contiene 150 gramos. Caja por 44 unidades.
              </p>              
            </div>

            <div className="w-full">              
              <div className="mb-10 flex h-[270px] w-[100] items-center justify-center rounded-md bg-green bg-opacity-5 text-green drop-shadow-lg">
                <Image
                  src="/images/features/avena_tradicional.png"
                  width={140}
                  height={140}                  
                  alt="Imagen de Avena Tradicional"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Avena Tradicional
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              Contiene 400 gramos. Caja por 22 unidades.
              </p>              
            </div>

            <div className="w-full">              
              <div className="mb-10 flex h-[270px] w-[100] items-center justify-center rounded-md bg-green bg-opacity-5 text-green drop-shadow-lg">
                <Image
                  src="/images/features/avena_extrafina.png"              
                  width={140}
                  height={140}
                  alt="Imagen de Avena Extrafina"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Avena Extrafina
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              Contiene 400 gramos. Caja por 22 unidades.
              </p>              
            </div>

            <div className="w-full">               
              <div className="mb-10 flex h-[270px] w-[100] items-center justify-center rounded-md bg-green bg-opacity-5 text-green drop-shadow-lg">
                <Image
                  src="/images/features/salvado_avena.png"              
                  width={140}
                  height={140}
                  alt="Imagen de Salvado de Avena"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Salvado de Avena
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              Contiene 350 gramos. Caja por 22 unidades.
              </p>                            
            </div>

            <div className="w-full">              
              <div className="mb-10 flex h-[270px] w-[100] items-center justify-center rounded-md bg-green bg-opacity-5 text-green drop-shadow-lg">
                  <Image
                    src="/images/features/avena_instantanea.png"              
                    width={140}
                    height={140}
                    alt="Imagen de Avena Instantanea"
                  />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Avena Instantánea
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                Contiene 350 gramos. Caja por 22 unidades.
              </p>
            </div>            

            <div className="w-full">              
              <div className="mb-10 flex h-[270px] w-[100] items-center justify-center rounded-md bg-green bg-opacity-5 text-green drop-shadow-lg">
                <Image
                  src="/images/features/copo_bolsa_2.png"                  
                  width={180}
                  height={180}
                  alt="Imagen copos de cereal a granel"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Copos a granel
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              Copos de maíz: bolsa por 3 kilos. 
              Copos Azucarados: bolsa por 4 kilos.
              </p>              
            </div>

            <div className="w-full">              
              <div className="mb-10 flex h-[270px] w-[100] items-center justify-center rounded-md bg-green bg-opacity-5 text-green drop-shadow-lg">
                <Image
                  src="/images/features/bolsa_avena_2.png"                  
                  width={160}
                  height={160}
                  alt="Imagen avena arrollada a granel"
                />
              </div>
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Avena arrollada a granel
              </h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                Instantánea por 20 kilos. Tradicional por 25 kilos. Extrafina por 25 kilos. Gruesa por 25 kilos. Salvado de Avena por 25 kilos. Harina de Avena por 25 kilos.
              </p>              
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
