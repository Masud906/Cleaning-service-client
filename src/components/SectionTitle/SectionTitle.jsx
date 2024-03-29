
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 text-center mx-auto my-6">
            <p className="text-green-400 mb-2">---- {subHeading} ----</p>
            <h3 className="text-3xl text-orange-400 uppercase border-y-4 py-4">
                {heading}</h3>
        </div>
    );
};

export default SectionTitle;