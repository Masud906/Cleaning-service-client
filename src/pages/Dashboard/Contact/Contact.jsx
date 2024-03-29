import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Contact = () => {
    return (
        <div>
            <div>
                <SectionTitle heading="contact" subHeading="call"></SectionTitle>
            </div>
            {/* <div>
                <div>
                    <div className="mb-10 diff aspect-[4/1]">
                        <div className="diff-item-1">
                            <div className="bg-green-300 text-primary-content text-8xl font-black grid place-content-center">Call-01784937906</div>
                        </div>
                        <div className="diff-item-2">
                            <div className="bg-orange-400 text-8xl font-black grid place-content-center">Call-01784937906</div>
                        </div>
                        <div className="diff-resizer"></div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="mb-10 diff aspect-[4/1]">
                        <div className="diff-item-1">
                            <div className="bg-green-300 text-primary-content text-8xl font-black grid place-content-center">Call-01784937906</div>
                        </div>
                        <div className="diff-item-2">
                            <div className="bg-orange-400 text-8xl font-black grid place-content-center">Call-01784937906</div>
                        </div>
                        <div className="diff-resizer"></div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div className="mb-10 diff aspect-[4/1]">
                        <div className="diff-item-1">
                            <div className="bg-green-300 text-primary-content text-8xl font-black grid place-content-center">Call-01784937906</div>
                        </div>
                        <div className="diff-item-2">
                            <div className="bg-orange-400 text-8xl font-black grid place-content-center">Call-01784937906</div>
                        </div>
                        <div className="diff-resizer"></div>
                    </div>
                </div>
            </div> */}
            <div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1"  />
                    <div className="collapse-title text-xl font-medium">
                       call-01784937906
                    </div>
                    {/* <div className="collapse-content">
                        <p>hello</p>
                    </div> */}
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                    call-01784937906
                    </div>
                    {/* <div className="collapse-content">
                        <p>hello</p>
                    </div> */}
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                    call-01784937906
                    </div>
                    {/* <div className="collapse-content">
                        <p>hello</p>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default Contact;