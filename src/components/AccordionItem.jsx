const AccordionItem = ({ id, title, content }) => {
    return (
        <div className="accordion-item mb-3">
            <h2 className="accordion-header" id={`heading${id}`}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                    {title}
                </button>
            </h2>
            <div id={`collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`heading${id}`}
                data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p className="mb-0">{content}</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;