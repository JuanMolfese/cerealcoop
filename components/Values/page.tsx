import SectionTitle from "../Common/SectionTitle";

const Values = () => {
    return (
    <>
    <section id="features" className="pt-3 md:py-3 lg:py-3">
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
        </div>
    </section>
    </>
    );
};
export default Values;
